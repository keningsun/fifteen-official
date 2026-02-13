export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  role: string;
  summary: string;
  sections: Array<{
    heading: string;
    body: string[];
    list?: string[];
    code?: string;
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'handling-context-window-limits-in-fifteen-token-tracking-preventing-overflow',
    title:
      'Handling Context Window Limits in Fifteen: Token Tracking & Preventing Overflow',
    date: 'February 10, 2026',
    readTime: '12 min read',
    author: 'Yuvraj Shanmugam',
    role: 'Research Systems',
    summary:
      'Context windows are finite. Here is how Fifteen tracks tokens, surfaces risk, and keeps long-running research agents stable.',
    sections: [
      {
        heading: 'Why Token Tracking Matters',
        body: [
          'Context window management is more than a technical detail. It is the difference between a memo that lands and one that fails mid-stream.',
          'Fifteen makes usage visible so teams can design workflows that hold up under real research load.',
        ],
        list: [
          'Cost control with predictable token usage',
          'User experience that avoids mid-draft failures',
          'Reliability for multi-step research workflows',
        ],
      },
      {
        heading: 'Understanding Fifteen Metrics',
        body: [
          'Fifteen exposes token usage per run and per session so teams can audit cost and reliability without guessing.',
        ],
        list: [
          'input_tokens: prompt + conversation history',
          'output_tokens: model response tokens',
          'total_tokens: combined request total',
          'cache_read_tokens: cache hits for repeated prompts',
        ],
        code: `from fifteen.agent import Agent\nfrom fifteen.models import OpenAIChat\n\nagent = Agent(\n  model=OpenAIChat(id=\"gpt-4o\"),\n  instructions=\"Summarize the datapack for an IC memo.\"\n)\n\nresponse = agent.run(\"Draft the risk section.\")\nprint(response.metrics.total_tokens)`,
      },
      {
        heading: 'Best Practices for Long Contexts',
        body: [
          'Keep only what is decision-critical in the active context. Summarize tool outputs, and push raw sources into the datapack instead of the prompt.',
        ],
        list: [
          'Cap history length per run',
          'Summarize tool outputs before reuse',
          'Split research into staged agents',
        ],
      },
    ],
  },
  {
    slug: 'from-sources-to-memo-building-conviction-in-one-workspace',
    title: 'From sources to memo: building conviction in one workspace',
    date: 'February 8, 2026',
    readTime: '8 min read',
    author: 'Alyssa Chen',
    role: 'Product Research',
    summary:
      'Fifteen turns scattered sources into structured memos with citations, diffs, and a clear audit trail.',
    sections: [
      {
        heading: 'Start with a datapack',
        body: [
          'Drop links, PDFs, and notes into a datapack. Fifteen normalizes the evidence so agents can work against a stable source layer.',
        ],
      },
      {
        heading: 'Draft in patches',
        body: [
          'Each section ships as a patch. Review it like a PR, accept the parts you trust, and request a rewrite when needed.',
        ],
      },
      {
        heading: 'Share with confidence',
        body: [
          'Every claim is tied back to a source. Stakeholders can click through to validate the evidence and read context.',
        ],
      },
    ],
  },
  {
    slug: 'citations-that-stand-up-in-ic-reviews',
    title: 'Citations that stand up in IC reviews',
    date: 'February 6, 2026',
    readTime: '6 min read',
    author: 'Mateo Alvarez',
    role: 'Investments',
    summary:
      'Citations should be more than footnotes. Fifteen makes every claim inspectable at the snippet level.',
    sections: [
      {
        heading: 'Citations you can audit',
        body: [
          'Click any claim to reveal the exact snippet, timestamp, and source context. No more chasing links across tabs.',
        ],
      },
      {
        heading: 'Fewer review cycles',
        body: [
          'When evidence is clear, review moves faster. Teams spend less time arguing about source quality and more time on the decision itself.',
        ],
      },
    ],
  },
  {
    slug: 'diff-first-drafting-for-research-memos',
    title: 'Diff-first drafting for research memos',
    date: 'February 4, 2026',
    readTime: '7 min read',
    author: 'Priya Raman',
    role: 'Research Ops',
    summary:
      'Draft like code. Review like a PR. Fifteen keeps writing grounded and reversible.',
    sections: [
      {
        heading: 'Write without fear',
        body: [
          'Patches make every change reversible. Accept what works, reject what does not, and keep a clean history.',
        ],
      },
      {
        heading: 'Clear accountability',
        body: [
          'Diffs make it obvious who changed what, which speeds up internal alignment and reduces rework.',
        ],
      },
    ],
  },
  {
    slug: 'datapacks-ingesting-messy-sources-without-losing-signal',
    title: 'Datapacks: ingesting messy sources without losing signal',
    date: 'February 2, 2026',
    readTime: '9 min read',
    author: 'Jon Park',
    role: 'Applied AI',
    summary:
      'Datapacks unify links, PDFs, and datasets so agents can reason with consistent context.',
    sections: [
      {
        heading: 'Normalize first',
        body: [
          'Datapacks clean up raw sources and store them with provenance, so every memo section can point back to the original evidence.',
        ],
      },
      {
        heading: 'Reuse across teams',
        body: [
          'Teams can share datapacks across projects to avoid re-collecting the same materials each time.',
        ],
      },
    ],
  },
];

export const blogArchiveSlugs = [
  'handling-context-window-limits-in-fifteen-token-tracking-preventing-overflow',
  'from-sources-to-memo-building-conviction-in-one-workspace',
  'citations-that-stand-up-in-ic-reviews',
  'diff-first-drafting-for-research-memos',
  'datapacks-ingesting-messy-sources-without-losing-signal',
  'reviewable-edits-how-teams-ship-better-memos',
  'house-style-at-scale-templates-that-keep-teams-aligned',
  'memory-with-provenance-making-past-research-reusable',
  'agents-that-challenge-your-thesis-before-the-meeting',
  'from-link-pile-to-structured-thesis-in-20-minutes',
  'decision-logs-that-trace-back-to-sources',
  'building-a-research-workflow-that-actually-repeats',
  'making-risk-sections-precise-with-evidence',
  'how-analysts-share-context-without-extra-meetings',
  'designing-a-memo-pipeline-for-investment-teams',
  'export-ready-memos-from-draft-to-share-in-one-flow',
  'why-reviewable-diffs-change-research-collaboration',
  'the-anatomy-of-a-reliable-memo-template',
  'auditable-citations-for-every-claim',
  'when-to-trust-an-agent-review-patterns-that-work',
];

export const fallbackPost: BlogPost = {
  slug: 'research-memo-template',
  title: 'Building a research memo template that scales',
  date: 'February 1, 2026',
  readTime: '5 min read',
  author: 'Fifteen Team',
  role: 'Product',
  summary:
    'A template should capture signal, risks, and decisions without slowing teams down.',
  sections: [
    {
      heading: 'Structure for clarity',
      body: [
        'Start with a clear thesis, then document risks and open questions. Keep sources attached to every claim.',
      ],
    },
    {
      heading: 'Make it reviewable',
      body: [
        'Draft sections as patches so reviewers can accept or revert changes quickly.',
      ],
    },
    {
      heading: 'Export when ready',
      body: [
        'Once the memo is approved, export a clean shareable version for IC distribution.',
      ],
    },
  ],
};
