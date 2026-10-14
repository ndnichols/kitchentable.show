#!/usr/bin/env python3
"""Rebuild the data behind kitchentable.show/act.

Usage:
  python3 tools/build_act_data.py --legislators path/to/congress-legislators [--zcta path/to/tab20_cd11920_zcta520_natl.txt]

- Members: legislators-current.yaml from github.com/unitedstates/congress-legislators (public domain).
  Refresh whenever someone leaves office, and after every new Congress (next: Jan 3, 2027).
- ZIP -> district: the Census Bureau's ZCTA-to-congressional-district relationship file.
  Refresh when district maps change (next: the 120th Congress, Jan 2027).
"""
import argparse, csv, json, os, collections, yaml

FIPS = {'01':'AL','02':'AK','04':'AZ','05':'AR','06':'CA','08':'CO','09':'CT','10':'DE','11':'DC','12':'FL','13':'GA','15':'HI','16':'ID','17':'IL','18':'IN','19':'IA','20':'KS','21':'KY','22':'LA','23':'ME','24':'MD','25':'MA','26':'MI','27':'MN','28':'MS','29':'MO','30':'MT','31':'NE','32':'NV','33':'NH','34':'NJ','35':'NM','36':'NY','37':'NC','38':'ND','39':'OH','40':'OK','41':'OR','42':'PA','44':'RI','45':'SC','46':'SD','47':'TN','48':'TX','49':'UT','50':'VT','51':'VA','53':'WA','54':'WV','55':'WI','56':'WY','60':'AS','66':'GU','69':'MP','72':'PR','78':'VI'}

ap = argparse.ArgumentParser()
ap.add_argument('--legislators', required=True)
ap.add_argument('--zcta')
a = ap.parse_args()
out = os.path.join(os.path.dirname(__file__), '..', 'act', 'data')
os.makedirs(os.path.join(out, 'zips'), exist_ok=True)

people = yaml.safe_load(open(os.path.join(a.legislators, 'legislators-current.yaml')))
house, senate = {}, collections.defaultdict(list)
for p in people:
    t = p['terms'][-1]
    m = {'name': p['name'].get('official_full') or f"{p['name']['first']} {p['name']['last']}",
         'last': p['name']['last'], 'phone': t.get('phone', ''), 'url': t.get('url', ''), 'form': t.get('contact_form', '')}
    if t['type'] == 'sen':
        senate[t['state']].append(m)
    else:
        m['title'] = 'Rep.' if t['state'] not in ('DC','PR','GU','VI','AS','MP') else ('Resident Commissioner' if t['state']=='PR' else 'Delegate')
        house[f"{t['state']}-{int(t.get('district') or 0)}"] = m
json.dump({'house': house, 'senate': senate}, open(os.path.join(out, 'legislators.json'), 'w'), separators=(',', ':'))
print(f'members: {len(house)} House seats filled, {sum(map(len, senate.values()))} senators')

if a.zcta:
    land, anyp = collections.defaultdict(set), collections.defaultdict(set)
    with open(a.zcta, newline='', encoding='utf-8-sig') as f:
        for row in csv.DictReader(f, delimiter='|'):
            cd, zc = row.get('GEOID_CD119_20', ''), row.get('GEOID_ZCTA5_20', '')
            if not cd or not zc or cd[2:] == 'ZZ':
                continue
            st = FIPS.get(cd[:2])
            if not st:
                continue
            dn = int(cd[2:])
            d = f"{st}-{0 if dn == 98 else dn}"  # 98 = delegate / at-large territory
            anyp[zc].add(d)
            if int(row.get('AREALAND_PART') or 0) > 0:  # ignore water-only overlaps
                land[zc].add(d)
    z = {zc: (land[zc] or ds) for zc, ds in anyp.items()}
    shards = collections.defaultdict(dict)
    for zc, ds in z.items():
        shards[zc[0]][zc] = sorted(ds)
    for k, v in shards.items():
        json.dump(v, open(os.path.join(out, 'zips', f'{k}.json'), 'w'), separators=(',', ':'))
    multi = sum(1 for v in z.values() if len(v) > 1)
    print(f'zips: {len(z)} ZCTAs, {multi} span more than one district')
