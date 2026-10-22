# kitchentable.show

Landing page for Kitchen Table AI Safety. Plain static HTML served by GitHub Pages.

- `index.html` is the whole site. The video embed points at the channel's long-form uploads playlist (`UULF…`), so the newest episode shows up on its own; no weekly edits needed.
- `CNAME` tells GitHub Pages the custom domain. Don't delete it.
- The podcast itself lives on Transistor at podcast.kitchentable.show.
- `404.html` forwards any path this site doesn't have to the same path on podcast.kitchentable.show, so old links from when kitchentable.show pointed at Transistor (episode pages, /how-this-show-is-made) still work. If you ever add a real page here, it wins over the redirect automatically.

## /act — contact Congress

- `act/index.html` is the contact-Congress tool: ZIP → House member + senators, call-first, script, calling tips, "I did it."
- **Each episode's ask lives in `act/actions.js`**, one entry per episode. The newest *live* action is the default; older ones stay on the page under "Earlier actions," so people who listen weeks later can still do them.
- **Scheduling:** each action has a `live` time. Add next week's action and push any time before then; the page doesn't change for visitors until that moment. Use Central time offsets (`-05:00` in CDT, `-06:00` in CST).
- **Checking before launch:** `kitchentable.show/act?preview` shows actions that aren't live yet (with a "Not live yet" tag); `?now=2026-10-27T08:00-05:00` pretends it's that time.
- **Deep links:** `/act#<action id>` opens that action. A link tagged `?utm_campaign=ep03-…` opens episode 3's action, so old show-note links keep pointing at the right ask.
- **Short URLs:** `/at`, `/action` and `/actions` forward to `/act`, keeping `?utm_campaign=…` and `#…` (the "c" in "act" is hard to hear on air).
- Data lives in `act/data/` and is rebuilt with `tools/build_act_data.py` (see its header). Members come from the public-domain `unitedstates/congress-legislators` repo; ZIP → district comes from the Census Bureau's ZCTA-to-congressional-district relationship file.
- **Refresh members** whenever someone leaves office. **Refresh both** when the new Congress is seated (Jan 3, 2027): new members, and several states have new district maps.

## Analytics

GoatCounter (ndnichols.goatcounter.com), no cookies. Page views on every page; `/act` also counts events, prefixed per action by its `ev` in `actions.js` (episode 3's prefix is empty, so its names didn't change; episode 4's events read `act-asi-…`): `act-zip-lookup`, `act-call-house`, `act-call-senator`, `act-write-*`, `act-copy-letter` (fires with “Copy message & write”; `act-copy-letter-fail` if the browser blocked the copy), `act-tips-open`, `act-done`, `act-share`, `act-switch` (picked a different action). Tag inbound links with `?utm_campaign=…` (e.g. `ep3-yt`, `ep3-clip1`) to see where people came from under Campaigns.
