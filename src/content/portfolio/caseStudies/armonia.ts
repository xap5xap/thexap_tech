import type { CaseStudy } from "../types";

export const armoniaCaseStudy: CaseStudy = {
  identity: {
    id: "armonia",
    slug: "armonia",
    name: "Armonía",
    workType: "client-work",
    currentStatus: "in-active-use",
    statusEvidenceId: "active-use",
    timeframe: "2023 to 2026, including a two-year pause before the current product phase",
    audience: "A solo clinical psychologist operating a private practice",
    transformation:
      "Armonía replaced an ever-growing operational spreadsheet with a dedicated system Carla now uses as her primary tool, while the public experience gives prospective patients a clear, human path to begin a conversation.",
    conciseSummary:
      "An end-to-end product system for a psychology practice, shaped from discovery through daily operations and public distribution."
  },
  ownership: {
    summary:
      "I led product discovery, strategy, brand, UX, engineering, film, launch, and distribution. Carla brought the clinical and operational expertise, validated the work, and made the final product decisions. AI accelerated research synthesis and production work, but it did not replace Carla's judgment or turn the operating product into an AI system.",
    areas: ["product-strategy", "brand", "ux", "engineering", "film", "launch", "distribution"],
    productCycleStages: [
      { stage: "discover", evidenceIds: ["discovery-research"] },
      { stage: "position", evidenceIds: ["discovery-research", "public-site"] },
      { stage: "design", evidenceIds: ["validation-process"] },
      { stage: "build", evidenceIds: ["production-application"] },
      { stage: "launch", evidenceIds: ["public-site", "cinematic-launch"] },
      { stage: "distribute", evidenceIds: ["distribution-surfaces"] },
      { stage: "learn", evidenceIds: ["learning-traceability", "active-use"] }
    ],
    collaborators: [
      {
        nameOrRole: "Carla, practice owner and clinical psychologist",
        contribution:
          "Domain expertise, source interviews, workflow validation, clinical voice, and final product decisions."
      }
    ]
  },
  presentation: {
    primaryVisualId: "cinematic-journey",
    cardEvidenceId: "active-use",
    shareTitle: "Armonía: from discovery to a practice operating system",
    shareDescription:
      "How Xavier and Carla turned practice research into a public experience and a private system used for daily operations.",
    socialImageId: "cinematic-journey"
  },
  narrative: {
    transformation: {
      completion: "complete",
      summary: "From an ever-growing spreadsheet to a system built around the practice.",
      blocks: [
        {
          kind: "paragraph",
          body: "The practice had accumulated operational data across a Google Sheet that kept growing every month. It could store information, but it offered little room to understand the business or support better decisions. Armonía moved the active workflow into a dedicated application. Carla now uses that application as her primary system, and the former Sheet is archive-only."
        },
        {
          kind: "evidence",
          evidenceId: "sheet-archive"
        }
      ],
      evidenceIds: ["active-use", "sheet-archive"],
      assetIds: []
    },
    audience: {
      completion: "complete",
      summary: "One product system serves two connected audiences without pretending they use the same interface.",
      blocks: [
        {
          kind: "list",
          items: [
            "Carla needs a dependable operating view of her practice, with workflows that make the growing body of data easier to use and analyze.",
            "Prospective patients need to understand the practice, feel the intended tone, and begin a private human conversation without navigating a complex booking system."
          ]
        }
      ],
      evidenceIds: ["discovery-research", "whatsapp-path"],
      assetIds: []
    },
    productBet: {
      completion: "complete",
      summary:
        "Start with the real operating problem, then connect the private and public experiences through one product intent.",
      blocks: [
        {
          kind: "paragraph",
          body: "I began with design-thinking interviews led with Carla, then used AI to help organize and analyze the research. The synthesis exposed a practice whose information had outgrown its spreadsheet structure. The product bet was that a dedicated operating system could create a clearer analytical space, while a distinct public experience could communicate the practice and hand interested people to Carla through WhatsApp."
        },
        {
          kind: "paragraph",
          body: "AI supported the product-development workflow. Carla remained the domain expert and decision-maker, and the application itself does not claim an AI runtime."
        }
      ],
      evidenceIds: ["discovery-research", "validation-process"],
      assetIds: []
    },
    ownership: {
      completion: "complete",
      summary: "End-to-end ownership with an explicit decision boundary.",
      blocks: [
        {
          kind: "paragraph",
          body: "I was involved across the full cycle: interview design, research synthesis, opportunity framing, product strategy, brand direction, interaction design, application engineering, cinematic storytelling, launch, and distribution. Carla contributed the clinical and operational truth, participated throughout validation, and made the final decisions."
        },
        {
          kind: "list",
          items: [
            "Product strategy grounded in Carla's operating reality",
            "Brand, UX, and two distinct product surfaces",
            "Private application and public-site engineering",
            "Film direction, launch story, and distribution assets",
            "Research and production assistance from AI, with human review and decision-making"
          ]
        }
      ],
      evidenceIds: ["discovery-research", "validation-process", "production-application"],
      assetIds: []
    },
    experienceAndSystem: {
      completion: "complete",
      summary:
        "A human public journey and a private operating application, connected by the practice rather than an automated integration.",
      blocks: [
        {
          kind: "product-flow",
          title: "The experience from first contact to practice operations",
          steps: [
            "A prospective patient discovers Armonía through the website or shared content.",
            "The public experience explains the practice and creates enough trust to begin a conversation.",
            "The person contacts Carla through WhatsApp, where appointment coordination remains human.",
            "Carla manages the practice through the private application and uses its operational and reporting views.",
            "There is no claimed automated transfer from WhatsApp or the public site into the private application."
          ]
        },
        {
          kind: "media",
          assetId: "reporting-prototype"
        }
      ],
      evidenceIds: ["whatsapp-path", "production-application", "active-use"],
      assetIds: ["reporting-prototype"]
    },
    decisions: {
      completion: "complete",
      summary: "The most important choices favored adoption, trust, and truthful operating boundaries.",
      blocks: [
        {
          kind: "decision",
          decision: "Replace the spreadsheet in stages",
          context:
            "A new application would create no value if it merely duplicated a growing Sheet or demanded a risky all-at-once migration.",
          alternatives: [
            "Recreate the existing spreadsheet structure in a new interface",
            "Attempt to move every workflow at once"
          ],
          tradeOffs: [
            "A staged transition takes longer to complete",
            "Each released workflow has to be useful enough to earn adoption"
          ],
          result: "The dedicated application became Carla's primary system, and the Google Sheet became archive-only."
        },
        {
          kind: "decision",
          decision: "Keep appointment intake human",
          context:
            "The first contact concerns psychological care, so warmth, privacy, and judgment matter more than an automated booking funnel.",
          alternatives: ["Public self-scheduling", "An automated intake flow"],
          tradeOffs: [
            "WhatsApp requires Carla's attention",
            "The practice retains control over a sensitive first interaction"
          ],
          result: "Prospective patients contact Carla through WhatsApp to coordinate appointments."
        },
        {
          kind: "decision",
          decision: "Design one practice experience across two separate products",
          context: "The public site and private application solve different jobs and live in separate repositories.",
          alternatives: [
            "Force both audiences into one interface",
            "Describe a technical integration that does not exist"
          ],
          tradeOffs: [
            "The connection is operational and narrative rather than automated",
            "Each surface can remain focused on its actual user"
          ],
          result:
            "The public experience supports discovery and a WhatsApp handoff. The private application supports Carla's operations and analysis."
        }
      ],
      evidenceIds: ["sheet-archive", "whatsapp-path", "production-application"],
      assetIds: []
    },
    launchAndDistribution: {
      completion: "complete",
      summary:
        "The launch system combines a public product, cinematic storytelling, useful content, and a direct call to action.",
      blocks: [
        {
          kind: "list",
          items: [
            "Audience: people considering psychological support and people already connected to the practice",
            "Channels: the Armonía website, its blog, social content, and direct sharing",
            "Launch hook: a cinematic journey that expresses the emotional direction of the practice",
            "Reusable asset: the film and its visual language across the public experience",
            "Call to action: begin a conversation with Carla through WhatsApp",
            "Observable signal: a person reaches the WhatsApp contact path; no conversion rate is claimed"
          ]
        }
      ],
      evidenceIds: ["public-site", "cinematic-launch", "distribution-surfaces", "whatsapp-path"],
      assetIds: ["cinematic-journey"]
    },
    evidenceAndValidation: {
      completion: "complete",
      summary:
        "The story is supported by inspectable public artifacts, a documented design process, and tightly scoped operational confirmation.",
      blocks: [
        { kind: "evidence", evidenceId: "active-use" },
        { kind: "evidence", evidenceId: "sheet-archive" },
        { kind: "evidence", evidenceId: "validation-process" },
        { kind: "evidence", evidenceId: "public-site" },
        { kind: "evidence", evidenceId: "production-application" }
      ],
      evidenceIds: ["active-use", "sheet-archive", "validation-process", "public-site", "production-application"],
      assetIds: []
    },
    learningAndNextIteration: {
      completion: "complete",
      summary: "Traceability and adoption mattered more than feature volume.",
      blocks: [
        {
          kind: "paragraph",
          body: "The strongest product decisions could be traced from Carla's words to a research insight, a user story, a validation task, and finally the implemented workflow. AI made it faster to organize evidence and explore solutions, but the useful result came from keeping Carla in the decision loop."
        },
        {
          kind: "paragraph",
          body: "The next iteration should continue to observe the reporting and daily operational workflows, then prioritize the friction that appears in real use. This is a direction for continued learning, not a claim that every practice workflow is complete."
        }
      ],
      evidenceIds: ["learning-traceability", "active-use"],
      assetIds: []
    }
  },
  evidence: [
    {
      id: "active-use",
      state: "verified-outcome",
      statement: "Carla uses the private Armonía application as her primary operating system.",
      scope: "Current use by the practice owner, not a claim about patient adoption or business impact.",
      source: {
        label: "Practice-owner operational confirmation, recorded as a public-safe summary",
        access: "privately-verified",
        asOf: "2026-09-01"
      }
    },
    {
      id: "sheet-archive",
      state: "verified-outcome",
      statement: "The former Google Sheet is now archive-only.",
      scope: "The practice's previous operational spreadsheet after adoption of the private application.",
      source: {
        label: "Practice-owner operational confirmation, recorded as a public-safe summary",
        access: "privately-verified",
        asOf: "2026-09-01"
      }
    },
    {
      id: "public-site",
      state: "observed",
      statement: "The public Armonía website is live and presents the practice and its approach.",
      scope: "Public product surface only; availability does not establish conversion or clinical outcomes.",
      source: {
        label: "Armonía public website",
        href: "https://www.armoniapsicologia.com/",
        access: "public",
        asOf: "2026-09-01"
      }
    },
    {
      id: "whatsapp-path",
      state: "observed",
      statement: "The public experience directs prospective patients to a WhatsApp conversation.",
      scope: "Current public contact path; appointment coordination remains a human workflow.",
      source: {
        label: "Armonía public website",
        href: "https://www.armoniapsicologia.com/",
        access: "public",
        asOf: "2026-09-01"
      }
    },
    {
      id: "discovery-research",
      state: "observed",
      statement:
        "The product direction was grounded in design-thinking interviews with Carla and a structured synthesis of the practice's workflows and pain points.",
      scope: "Public-safe summary of private research. Raw interviews and clinical information are excluded.",
      source: {
        label: "Private discovery archive and before-state documentation",
        access: "privately-verified",
        asOf: "2026-09-01"
      }
    },
    {
      id: "validation-process",
      state: "observed",
      statement:
        "The product process moved from individual screen validation to integrated, task-based prototype validation with Carla.",
      scope: "Documented product-development process, not a usability metric or clinical outcome.",
      source: {
        label: "Private engineering-process and validation documentation",
        access: "privately-verified",
        asOf: "2026-09-01"
      },
      assetIds: ["reporting-prototype"]
    },
    {
      id: "production-application",
      state: "observed",
      statement: "A production private application exists with authenticated operational and reporting workflows.",
      scope: "Application surface and implementation only; no patient records or private analytics are published.",
      source: {
        label: "Private application repository and public login surface",
        access: "privately-verified",
        asOf: "2026-09-01"
      }
    },
    {
      id: "cinematic-launch",
      state: "observed",
      statement: "A cinematic journey was produced as part of Armonía's public storytelling system.",
      scope: "Observed launch and brand artifact; no audience-response metric is claimed.",
      source: {
        label: "Armonía cinematic journey",
        href: "https://www.armoniapsicologia.com/viaje",
        access: "public",
        asOf: "2026-09-01"
      },
      assetIds: ["cinematic-journey"]
    },
    {
      id: "distribution-surfaces",
      state: "observed",
      statement:
        "Armonía has a public website, editorial content, reusable cinematic media, and a direct WhatsApp call to action.",
      scope: "Observed distribution surfaces only; reach, conversion, and acquisition impact are not claimed.",
      source: {
        label: "Armonía public website and cinematic journey",
        href: "https://www.armoniapsicologia.com/",
        access: "public",
        asOf: "2026-09-01"
      }
    },
    {
      id: "learning-traceability",
      state: "observed",
      statement:
        "The documented workflow traces research through synthesis, product decisions, validation tasks, and implementation.",
      scope: "Product-development traceability, not a claim that every planned feature or workflow is complete.",
      source: {
        label: "Private engineering-process documentation",
        access: "privately-verified",
        asOf: "2026-09-01"
      }
    }
  ],
  assets: [
    {
      id: "cinematic-journey",
      kind: "film-frame",
      src: "/images/projects/armonia/cinematic-journey.webp",
      alt: "A solitary figure follows a path through a dark valley toward a warm light beneath a tree.",
      caption: "Film frame from Armonía's cinematic journey, created to express the practice's emotional direction.",
      evidenceState: "observed",
      permission: "owned"
    },
    {
      id: "reporting-prototype",
      kind: "data-visual",
      src: "/images/projects/armonia/reporting-prototype.png",
      alt: "Seeded prototype of Armonía's monthly reporting view with summary cards, a daily collections chart, and payment-method breakdowns.",
      caption:
        "Illustrative validation prototype with seeded data. The production reporting workflow is verified separately.",
      evidenceState: "illustrative",
      permission: "owned"
    }
  ],
  links: [
    {
      label: "Visit Armonía",
      href: "https://www.armoniapsicologia.com/",
      kind: "product",
      status: "verified"
    },
    {
      label: "Watch the cinematic journey",
      href: "https://www.armoniapsicologia.com/viaje",
      kind: "launch",
      status: "verified"
    },
    {
      label: "View the private application's public login",
      href: "https://app.armoniapsicologia.com/login",
      kind: "product",
      status: "verified"
    }
  ],
  supportingDetails: {
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Vite",
      "Hono",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "Cloudflare"
    ],
    services: ["WhatsApp", "Contentful", "Google Analytics", "Google Flow"]
  }
};
