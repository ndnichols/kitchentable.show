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
    id: 'my-vote',
    episode: 6,
    episodeTitle: 'Everyone thinks AI should be regulated. It’s not',
    live: '2026-11-10T00:00:00-06:00',
    ev: 'vote-',
    kicker: 'Two minutes, one call',
    title: 'Tell Congress: AI safety matters to you, and your vote is riding on it.',
    short: 'AI safety matters to me, and my vote is riding on it',
    lede: 'Most Americans want AI regulated, even if that means slower development, and even the biggest AI companies say they want rules. But Congress hasn’t passed any law on the safety of the most powerful AI, and most of Washington’s effort has gone into blocking the state laws we do have. Politicians move when an issue starts costing votes. In the November 2026 election, 56% of voters said AI and data centers were a crucial or major factor in their vote. Make sure your members of Congress know you’re one of them.',
    ask: (target) => `I'm calling to tell ${target} that AI safety is important to me and my vote is riding on it. Please support binding safety rules for the most powerful AI models, and don't block the states from protecting us in the meantime.`,
    subject: 'AI safety is important to me, and my vote is riding on it',
    letterBody: [
      'Most Americans want AI regulated, even if it means slower development, and even the largest AI companies say they want rules. Yet there is still no federal law on the safety of the most powerful AI models, and the safety commitments that exist are voluntary.',
      'AI safety is important to me, and my vote is riding on it. Please support binding safety rules for the most powerful AI models, and don’t block the states from protecting their residents in the meantime.'
    ],
    shareText: 'Two minutes: tell Congress AI safety matters to you and your vote is riding on it.',
    more: null
  },
  {
    id: 'independent-testing',
    episode: 5,
    episodeTitle: 'AI sneaks, cheats, and lies',
    live: '2026-11-03T00:00:00-06:00',
    ev: 'test-',
    kicker: 'Two minutes, one call',
    title: 'Tell Congress: test the most powerful AI independently before it\u2019s released.',
    short: 'Independent testing of the most powerful AI before release',
    lede: 'In testing, today\u2019s top AI models have cheated on their tests, hidden it, and even tried to blackmail someone to avoid being shut down. They also behave better when they think they\u2019re being watched. Right now the companies test their own AI and decide what to tell us, and no law requires anyone else to check. Cars have to pass someone else\u2019s crash test before they\u2019re sold. The most powerful AI should too.',
    ask: (target) => `I'm calling to ask ${target} to support requiring independent, third-party testing of the most powerful AI models before they're released, so the companies aren't the only ones checking their own work.`,
    subject: 'Require independent testing of powerful AI before release',
    letterBody: [
      'In testing, today\u2019s most advanced AI models have cheated on their tests, hidden it, and even tried to blackmail someone to avoid being shut down. They also behave better when they suspect they are being tested. Right now the companies that build these systems test them themselves and decide what the public learns.',
      'Please support requiring independent, third-party testing of the most powerful AI models before they are released, with the authority to keep a model off the market if it fails.'
    ],
    shareText: 'Two minutes: tell Congress the most powerful AI should be tested independently before it\u2019s released.',
    more: null
  },
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
