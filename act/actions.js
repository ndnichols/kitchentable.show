// The actions shown on kitchentable.show/act — one entry per episode ask.
//
// Newest live action is the default. Older ones stay on the page under
// "Earlier actions" so people who listen weeks later can still do them.
//
// To add next week's action: copy an entry, give it a new id + episode,
// set `live` to when the episode drops (Central time offset!), and push any
// time before then. Until `live`, the page looks exactly like it does now.
// Check it early with kitchentable.show/act?preview (shows everything).
//
// `ev` prefixes the GoatCounter event names. Episode 3's is '' so its
// existing event names (act-call-house, …) keep counting in one place.
//
// Links: /act#<id> opens that action; so does ?utm_campaign=epNN-… for
// the episode with that number.
window.KT_ACTIONS = [
  {
    id: 'ban-superintelligence',
    episode: 4,
    episodeTitle: 'AI is getting really good, really quickly',
    live: '2026-10-27T00:00:00-05:00',
    ev: 'asi-',
    kicker: 'Two minutes, one call',
    title: 'Tell Congress: ban superintelligence until we know how to control it.',
    short: 'Ban superintelligence until we know how to control it',
    lede: 'AI companies say openly that they’re racing to build superintelligence: AI smarter than all of humanity put together. They’re already starting to use today’s AI to build the next one. Nobody knows how to control something smarter than all of us, and no law says they have to wait until someone does. In September, the first bill to ban it was introduced in Congress.',
    ask: (target) => `I'm calling to ask ${target} to support banning the development of superintelligence, AI that's smarter than all of us, until and unless we know how to control it.`,
    subject: 'Ban superintelligence until we know how to control it',
    letterBody: [
      'AI companies say openly that they are trying to build superintelligence, AI that would be smarter than all of humanity, and they are starting to use today’s AI to build the next generation. No one knows how to control a system like that.',
      'Please support banning the development of superintelligence, here at home and through international agreements, until and unless we know how to control it.'
    ],
    shareText: 'Two minutes: tell Congress to ban superintelligence until we know how to control it.',
    more: {
      title: 'Want to do more?',
      text: 'ControlAI, the group from the episode, runs a national campaign for a superintelligence ban, including local volunteer chapters. Kitchen Table isn’t affiliated with them.',
      label: 'See ControlAI’s campaign',
      href: 'https://controlai.org/take-action'
    }
  },
  {
    id: 'report-incidents',
    episode: 3,
    episodeTitle: 'AI is grown, not programmed',
    live: '2026-10-01T00:00:00-05:00',
    ev: '',
    kicker: 'Two minutes, one call',
    title: 'Tell Congress: AI companies should report when things go wrong.',
    short: 'Make AI companies report when things go wrong',
    lede: 'Right now, there’s no national rule that makes AI companies tell anyone when their AI is misused or something goes badly wrong. We mostly find out when a company decides to tell us. Nuclear power plants have to report problems. AI companies should too.',
    ask: (target) => `I'm calling to ask ${target} to support requiring AI companies to report when things go wrong with their AI, and not to override state laws that already require it.`,
    subject: 'Require AI companies to report when things go wrong',
    letterBody: [
      'Right now there’s no national rule that requires AI companies to report when their AI systems are misused or something goes seriously wrong. We mostly find out only when a company decides to tell us.',
      'Nuclear power plants have to report problems. AI companies should too. Please support national rules that require AI companies to report when things go wrong, and don’t override the state laws that already require it.'
    ],
    shareText: 'Two minutes: tell Congress AI companies should have to report when things go wrong.',
    more: null
  }
];
