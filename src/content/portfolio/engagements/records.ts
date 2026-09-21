import type { Engagement } from "../engagementTypes";

// Visitor-facing records with server-only provenance. The editorial ledger is never imported.
export const engagementRecords: Engagement[] = [
  {
    identity: {
      id: "UW-01",
      slug: "senior-react-nextjs-2022",
      name: "Senior React and Next.js development",
      workType: "client-work",
      startDate: "2022-11-11",
      endDate: "2023-02-16"
    },
    publication: "ready",
    summary:
      "Senior React and Next.js development for a remote full-stack engagement, completed on time according to the client.",
    situation: {
      title: "The work",
      paragraphs: [
        "The client hired for a senior full-stack role centered on React and Next.js, with remote collaboration."
      ],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Senior Full Stack React/Next.js Developer - Remote. Nov 11, 2022 -  Feb 16, 2023.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "client-feedback",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client reported that the work was completed on time without issues and praised reliability and collaboration. Verified client excerpt: The work was completed on time and without any issues.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contract"]
      },
      {
        name: "Next.js",
        evidenceIds: ["contract"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "client-feedback",
      summary:
        "The client reported that the work was completed on time without issues and praised reliability and collaboration.",
      attribution: "Upwork client, 5.0/5",
      quote: "The work was completed on time and without any issues."
    },
    presentation: {
      shareTitle: "Senior React and Next.js development (2022)",
      shareDescription:
        "Senior React and Next.js development for a remote full-stack engagement, completed on time according to the client."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The contract covered React and Next.js development. The client described the work as completed on time and praised the working relationship."
      ],
      evidenceIds: ["contract", "client-feedback"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React + Next.js: give each layer a clear job",
          explanation:
            "React handles reusable interface components; Next.js organizes pages and server work. I keep business rules separate from screen layout so changes remain easier to understand.",
          tradeoff: "A framework adds structure, but it does not replace clear boundaries between browser and server."
        },
        {
          title: "Zustand: share only the state that needs sharing",
          explanation:
            "For a small shared-state requirement, Zustand offers a compact store that several components can use. I keep temporary input and open/closed controls local to their component.",
          tradeoff:
            "Example option: a shared store needs ownership rules so it does not become a second, stale copy of server data."
        },
        {
          title: "Tailwind CSS: keep visual decisions consistent",
          explanation:
            "Tailwind provides shared styling utilities for spacing, color, and responsive layouts. I look for consistency across screens while keeping the product’s visual identity in reusable components.",
          tradeoff: "Example option: long utility lists need component conventions to stay easy to maintain."
        }
      ],
      examples: ["zustand", "tailwind"]
    }
  },
  {
    identity: {
      id: "UW-02",
      slug: "react-webapp-2020-oct",
      name: "React webapp development, October 2020 contract",
      workType: "client-work",
      startDate: "2020-10-25",
      endDate: "2022-08-15"
    },
    publication: "ready",
    summary: "React frontend development for a web application, under the October 2020 to August 2022 contract.",
    situation: {
      title: "The work",
      paragraphs: ["This engagement centered on developing the frontend of a React web application."],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "React Webapp Frontend Development. Oct 25, 2020 -  Aug 15, 2022.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contract"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "none"
    },
    presentation: {
      shareTitle: "React webapp development, October 2020 contract (2020)",
      shareDescription:
        "React frontend development for a web application, under the October 2020 to August 2022 contract."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The recorded scope was React webapp frontend development. This contract is presented separately from the earlier engagement with the same job title."
      ],
      evidenceIds: ["contract"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React: organize the interface around reusable behavior",
          explanation:
            "I separate reusable controls from the screens that assemble them. This keeps a change to a shared control from turning into the same fix repeated across several pages.",
          tradeoff:
            "Reuse earns its place when behavior is shared. Premature abstractions make simple screens harder to change."
        },
        {
          title: "Application state: choose the smallest useful structure",
          explanation:
            "Zustand suits a small shared store; Redux makes complex state changes explicit through actions and reducers. The choice depends on how much state different screens must coordinate.",
          tradeoff:
            "These are example options. I keep server data and temporary screen state distinct before introducing either store."
        }
      ],
      examples: ["redux", "zustand"]
    }
  },
  {
    identity: {
      id: "UW-03",
      slug: "research-platform-2022",
      name: "Research platform development",
      workType: "client-work",
      startDate: "2022-05-17",
      endDate: "2022-07-30"
    },
    publication: "ready",
    summary: "React, Next.js, MUI v5, and Firebase development for an academic research platform.",
    situation: {
      title: "The work",
      paragraphs: [
        "An academic research team used an open-source platform to coordinate researchers, recruit participants, schedule and run experiments, and collect the resulting data."
      ],
      evidenceIds: ["job-description"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "React.js, Next.js, MUI v5, and Firebase Developer. May 17, 2022 -  Jul 30, 2022.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "HonorEd Technologies described its existing open-source research platform, linked to 1Cademy and VisualExp. It coordinated microtasks, votes, research participants, experiment scheduling, reminders, experiments, and collected data. Requested work included maintenance, new features, documentation, integrating other teams' tools, and dependency updates. Qualifications named React, Recoil, Next.js, MUI, Emotion, Firebase, Firestore, Google Cloud Functions, and Cloud Run. These are requested responsibilities, not confirmed personal delivery.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~011fff0479dbd2b3e5",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["job-description"]
      },
      {
        name: "Next.js",
        evidenceIds: ["job-description"]
      },
      {
        name: "MUI v5",
        evidenceIds: ["job-description"]
      },
      {
        name: "Firebase",
        evidenceIds: ["job-description"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "none"
    },
    presentation: {
      shareTitle: "Research platform development (2022)",
      shareDescription: "React, Next.js, MUI v5, and Firebase development for an academic research platform."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The brief requested maintenance, new features, custom components, documentation, integrations with other teams' tools, and dependency updates. The platform connected microtasks and voting with participant and experiment workflows."
      ],
      evidenceIds: ["job-description"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "MUI: make complex research screens consistent",
          explanation:
            "Forms, dialogs, and repeated controls benefit from a shared component system. MUI provides those building blocks, leaving more attention for participant, scheduling, and experiment workflows.",
          tradeoff:
            "Shared components still need careful labels, keyboard behavior, and product-specific interaction design."
        },
        {
          title: "Firebase: connect screens to dependable data rules",
          explanation:
            "Participant and experiment workflows depend on consistent data access. I treat permissions, validation, and state transitions as part of the feature, alongside what appears on screen.",
          tradeoff:
            "A managed backend reduces infrastructure work, but the application still needs deliberate access rules and failure handling."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-04",
      slug: "cypress-nx-tests-2022",
      name: "Cypress and Nx testing, March 2022 contract",
      workType: "client-work",
      startDate: "2022-03-30",
      endDate: "2022-05-19"
    },
    publication: "ready",
    summary: "I improved unit and integration tests by bringing backend-service emulators into the test process.",
    situation: {
      title: "The client situation",
      paragraphs: ["A team working on a React application in an Nx workspace needed support with its automated tests."],
      evidenceIds: ["contract", "contribution"]
    },
    contribution: {
      title: "Testing across the application and its services",
      paragraphs: [
        "I improved the unit and integration tests and integrated emulators for the backend services into the test process. The client identified this as the specific contribution of the engagement."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Cypress tests for React project (set up with NX). Mar 30, 2022 -  May 19, 2022.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed improvements to unit and integration tests, including backend-service emulators in the test process. Verified client excerpt: integrating emulators for our backend services into the test process.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contract"]
      },
      {
        name: "Cypress",
        evidenceIds: ["contract"]
      },
      {
        name: "Nx",
        evidenceIds: ["contract"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client confirmed improvements to unit and integration tests, including backend-service emulators in the test process.",
      attribution: "Upwork client, 4.9/5",
      quote: "integrating emulators for our backend services into the test process."
    },
    presentation: {
      shareTitle: "Cypress and Nx testing, March 2022 contract (2022)",
      shareDescription:
        "I improved unit and integration tests by bringing backend-service emulators into the test process."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Backend emulators: test the integration boundary",
          explanation:
            "I brought backend-service emulators into the unit and integration test process. They make it possible to exercise service interactions in a controlled environment.",
          tradeoff:
            "Emulators improve repeatability; checks against the deployed environment still matter because production behavior can differ."
        },
        {
          title: "Tests: make failures useful to the next engineer",
          explanation:
            "I focus assertions on meaningful behavior and keep test data controlled. A failing test should help the team locate a regression and understand what changed.",
          tradeoff:
            "Broad tests cover more interactions but take longer to diagnose. Focused checks help keep feedback actionable."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-05",
      slug: "senior-react-support-2021",
      name: "Senior React support",
      workType: "client-work",
      startDate: "2021-10-22",
      endDate: "2022-02-16"
    },
    publication: "ready",
    summary: "Senior React support for responsive interfaces, cross-browser behavior, and precise UI implementation.",
    situation: {
      title: "The work",
      paragraphs: [
        "The client sought an experienced developer for complex React interfaces that needed to work consistently across screen sizes and browsers."
      ],
      evidenceIds: ["job-description"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Full time senior react developer. Oct 22, 2021 -  Feb 16, 2022.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "The post requested an experienced React developer for complex applications, responsive behavior, cross-browser compatibility, and precise implementation of interface designs. Its full-time wording is a hiring request, not proof of hours worked.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~01a36cdd2b7981e7e8",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["job-description"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "none"
    },
    presentation: {
      shareTitle: "Senior React support (2021)",
      shareDescription:
        "Senior React support for responsive interfaces, cross-browser behavior, and precise UI implementation."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The job description called for responsive problem solving, cross-browser fixes, and accurate implementation of page designs. The contract represents a focused support engagement."
      ],
      evidenceIds: ["job-description"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Responsive React: fix the behavior behind the layout",
          explanation:
            "I start with the screen size and interaction that expose a problem, then separate layout rules from component behavior. Checking nearby widths helps reveal the underlying constraint.",
          tradeoff: "A fix for one screenshot can fail at another width. The layout needs to respond to its content."
        },
        {
          title: "Tailwind or Material UI: match the styling approach to the job",
          explanation:
            "Tailwind offers control through shared styling utilities. Material UI supplies ready-made component behavior. I choose the approach around the design freedom and interaction depth the interface needs.",
          tradeoff:
            "These are example options. Existing conventions and the cost of customization matter as much as implementation speed."
        }
      ],
      examples: ["tailwind", "material-ui"]
    }
  },
  {
    identity: {
      id: "UW-06",
      slug: "cypress-nx-tests-2021",
      name: "Cypress and Nx testing, December 2021 contract",
      workType: "client-work",
      startDate: "2021-12-08",
      endDate: "2022-02-16"
    },
    publication: "ready",
    summary:
      "I started Cypress end-to-end testing for a new React product and established practices the team could continue using.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "The team had a new React product in an Nx workspace, with rudimentary tests to use as a starting point."
      ],
      evidenceIds: ["contract", "contribution", "job-description"]
    },
    contribution: {
      title: "Starting the test suite and the working practices",
      paragraphs: [
        "I helped get end-to-end testing underway with Cypress and established testing practices for future developers. The client described my work as autonomous and highlighted the coverage achieved."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [
      {
        title: "Tests the team could build on",
        paragraphs: [
          "The engagement combined test implementation with guidance for developers continuing the work. The existing project included Cypress and Reflect.Run tests; the confirmed contribution is the Cypress testing work."
        ],
        evidenceIds: ["contribution", "job-description"]
      }
    ],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Cypress tests for React project (set up with NX). Dec 8, 2021 -  Feb 16, 2022.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed that Xavier started Cypress end-to-end testing for a new React product and established practices for future developers. The client described coverage as high without providing a measured percentage. Verified client excerpt: established best practices for developers to follow in the future.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "The post requested maintainable Cypress end-to-end tests in an existing Nx application. Rudimentary Cypress and Reflect.Run tests were available as starting points. JavaScript and TypeScript were requested skills; actual Reflect.Run contributions and language choices are not confirmed.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~0185866950fc176b46",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contribution"]
      },
      {
        name: "Cypress",
        evidenceIds: ["contribution"]
      },
      {
        name: "Nx",
        evidenceIds: ["job-description"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client confirmed that Xavier started Cypress end-to-end testing for a new React product and established practices for future developers. The client described coverage as high without providing a measured percentage.",
      attribution: "Upwork client, 4.8/5",
      quote: "established best practices for developers to follow in the future."
    },
    presentation: {
      shareTitle: "Cypress and Nx testing, December 2021 contract (2021)",
      shareDescription:
        "I started Cypress end-to-end testing for a new React product and established practices the team could continue using."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Cypress: verify the journey a user depends on",
          explanation:
            "I started end-to-end testing for the new React product and established practices for future developers. Cypress lets tests exercise an application through browser interactions.",
          tradeoff: "End-to-end tests need stable data and focused assertions to keep failures useful."
        },
        {
          title: "Test practices: make quality work repeatable",
          explanation:
            "The value of a test suite extends beyond its first author. Clear setup, readable checks, and consistent conventions help the next developer extend coverage with confidence.",
          tradeoff:
            "More tests do not automatically mean better protection. Critical behavior and maintainable checks matter more than a raw count."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-07",
      slug: "node-login-automation-2021",
      name: "Node.js login automation and React frontend",
      workType: "client-work",
      startDate: "2021-07-02",
      endDate: "2021-08-20"
    },
    publication: "ready",
    summary: "A Node.js login-automation application with a React frontend.",
    situation: {
      title: "The work",
      paragraphs: [
        "The engagement brought together a server-side login process and a web interface for interacting with it."
      ],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Developing NodeJS app to automate login process + React front-end.. Jul 2, 2021 -  Aug 20, 2021.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "client-feedback",
        basis: "client-feedback",
        state: "observed",
        statement: "Client rating 4.7/5, without written feedback.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "Node.js",
        evidenceIds: ["contract"]
      },
      {
        name: "React",
        evidenceIds: ["contract"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "client-feedback",
      summary: "Client rating 4.7/5, without written feedback.",
      attribution: "Upwork client, 4.7/5"
    },
    presentation: {
      shareTitle: "Node.js login automation and React frontend (2021)",
      shareDescription: "A Node.js login-automation application with a React frontend."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The job title identifies two parts of the work: a Node.js application to automate a login process, and a React frontend. The page keeps that recorded scope without assigning an unverified identity provider or integration."
      ],
      evidenceIds: ["contract", "client-feedback"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Node.js: keep sensitive login work on the server",
          explanation:
            "Login automation needs a clear boundary between the operation itself and the interface that starts it. I keep credentials and privileged actions in the server layer.",
          tradeoff:
            "Server-side execution still requires explicit authorization, session handling, and a safe response when a login fails."
        },
        {
          title: "React + shared state: make progress understandable",
          explanation:
            "A login interface needs distinct pending, success, and failure states. A small Zustand store is one way to coordinate those states when several components depend on them.",
          tradeoff:
            "Zustand is an example option here. The server remains the authority for whether authentication succeeded."
        }
      ],
      examples: ["zustand"]
    }
  },
  {
    identity: {
      id: "UW-08",
      slug: "aiops-frontend-2020",
      name: "AIOps diagnostics frontend",
      workType: "client-work",
      startDate: "2020-09-27",
      endDate: "2021-01-07"
    },
    publication: "ready",
    summary:
      "I helped a remote team turn early ideas into a working frontend prototype for a predictive diagnostics product.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "A small team was building a monitoring and predictive diagnostics product. It needed a frontend developed from wireframes, product input, and user feedback."
      ],
      evidenceIds: ["contract", "contribution", "job-description"]
    },
    contribution: {
      title: "From early ideas to a working frontend",
      paragraphs: [
        "I worked with the remote team over several months to turn ideas documented in a Google Doc into a product prototype. My contribution was frontend development and close collaboration with the team."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement:
          "Frontend Developer for an Innovative AIOps Predictive Diagnostics System. Sep 27, 2020 -  Jan 7, 2021.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed several months of frontend work that turned ideas in a Google Doc into a product prototype, with accountability and collaboration in a remote team. Verified client excerpt: took our ideas from a google doc to an actual product/prototype.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "The post described a monitoring and predictive diagnostics product. It requested a React frontend from wireframes and product-manager input, connected to a GraphQL API and informed by user feedback. It named React, Redux, GraphQL, and Apollo Client as required experience. It does not establish ownership of models or prediction algorithms.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~01f7d48dd825379120",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["job-description"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client confirmed several months of frontend work that turned ideas in a Google Doc into a product prototype, with accountability and collaboration in a remote team.",
      attribution: "Upwork client, 5.0/5",
      quote: "took our ideas from a google doc to an actual product/prototype."
    },
    presentation: {
      shareTitle: "AIOps diagnostics frontend (2020)",
      shareDescription:
        "I helped a remote team turn early ideas into a working frontend prototype for a predictive diagnostics product."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React: turn an idea into an experience people can inspect",
          explanation:
            "I helped turn ideas in a Google Doc into a working frontend prototype. Reusable components provide a practical way to evolve screens as the team makes product decisions.",
          tradeoff:
            "A prototype needs enough structure to change easily, without spending early effort on abstractions the product has not earned."
        },
        {
          title: "Product collaboration: make ambiguity visible",
          explanation:
            "I worked closely with a remote team over several months. A working interface gives people something concrete to discuss and helps reveal unanswered product questions.",
          tradeoff:
            "An interaction that looks complete can hide unfinished integration work. The team needs a shared understanding of what the prototype demonstrates."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-09",
      slug: "react-redux-webapp-2020-jan",
      name: "React and Redux webapp, January 2020 contract",
      workType: "client-work",
      startDate: "2020-01-27",
      endDate: "2020-10-25"
    },
    publication: "ready",
    summary: "I developed a React and Redux application with attention to UX, modular code, and tests.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "The client was developing a React and Redux web application and needed an engineer to carry implementation forward."
      ],
      evidenceIds: ["contract", "contribution"]
    },
    contribution: {
      title: "Connecting interface judgment and implementation",
      paragraphs: [
        "I implemented the frontend and worked through problems as they arose. The client highlighted my design and UX judgment as a useful part of the development process."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [
      {
        title: "Keeping the code clear and tested",
        paragraphs: [
          "I wrote modular code and kept up with tests as the application developed. The client specifically recognized those development practices, alongside communication and problem solving."
        ],
        evidenceIds: ["contribution"]
      }
    ],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "React Webapp Frontend Development. Jan 27, 2020 -  Oct 25, 2020.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed React and Redux development, problem solving, design and UX judgment, clear modular code, and ongoing tests. Their description of progress was figurative, not a measured metric. Verified client excerpt: writing clear, modular code and keeping up with tests.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contribution"]
      },
      {
        name: "Redux",
        evidenceIds: ["contribution"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client highlighted React and Redux development, problem solving, design and UX judgment, modular code, and continued testing.",
      attribution: "Upwork client, 5.0/5",
      quote: "writing clear, modular code and keeping up with tests."
    },
    presentation: {
      shareTitle: "React and Redux webapp, January 2020 contract (2020)",
      shareDescription: "I developed a React and Redux application with attention to UX, modular code, and tests."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Redux: make shared state changes traceable",
          explanation:
            "I developed the React and Redux frontend with attention to UX, modular code, and tests. Redux makes shared state changes explicit through actions and reducers.",
          tradeoff:
            "A central store adds structure and maintenance. Local interaction state still belongs close to the component that owns it."
        },
        {
          title: "Modular React: connect code structure to product changes",
          explanation:
            "The client highlighted clear code, tests, and UX judgment. Small, focused components help separate interface behavior from data transformations as the application evolves.",
          tradeoff:
            "Splitting every element into a component creates noise. Boundaries should follow meaningful responsibilities."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-11",
      slug: "marketplace-frontend-2020",
      name: "Marketplace frontend development",
      workType: "client-work",
      startDate: "2020-06-22",
      endDate: "2020-07-07"
    },
    publication: "ready",
    summary: "React frontend and integration work for a marketplace serving the online gaming community.",
    situation: {
      title: "The work",
      paragraphs: [
        "A startup was preparing a marketplace where buyers and sellers could exchange digital services for the gaming community."
      ],
      evidenceIds: ["job-description"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Front-End React developer needed for web-based marketplace. Jun 22, 2020 -  Jul 7, 2020.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "The post described Tango, a marketplace connecting buyers and sellers of services for the gaming community. It requested responsive frontend work and integrations alongside an existing full-stack developer. A beta launch and later iteration were plans, not verified outcomes.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~018f1815f9aaf1dd96",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["job-description"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "none"
    },
    presentation: {
      shareTitle: "Marketplace frontend development (2020)",
      shareDescription: "React frontend and integration work for a marketplace serving the online gaming community."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The brief focused on responsive frontend development and integrations alongside an existing full-stack developer. It described a planned beta launch and subsequent iteration from user feedback."
      ],
      evidenceIds: ["job-description"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React: keep the marketplace experience coherent",
          explanation:
            "Browsing and moving between marketplace views depend on consistent controls and clear feedback. I treat loading, empty results, and failed requests as part of the interface design.",
          tradeoff:
            "Shared components need room for genuinely different workflows; visual consistency should not hide important differences."
        },
        {
          title: "Integrations: agree on behavior across the boundary",
          explanation:
            "Frontend work alongside another engineer depends on clear data shapes, error responses, and ownership. Those agreements make it easier to connect screens to backend behavior.",
          tradeoff:
            "A successful request is only one case. Slow responses, missing data, and retries also affect the customer experience."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-12",
      slug: "slicify-2019",
      name: "Slicify application development",
      workType: "client-work",
      startDate: "2019-04-16",
      endDate: "2020-02-01"
    },
    publication: "ready",
    summary: "I developed maintainable React code for Slicify and gave the team direct feedback on product ideas.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "The Slicify team needed application development it could continue using and maintaining after the engagement."
      ],
      evidenceIds: ["contract", "contribution"]
    },
    contribution: {
      title: "Code the company could continue to use",
      paragraphs: [
        "I developed React application code and gave direct feedback on product ideas. The client described the resulting code as easy to maintain and useful as a continuing company asset."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Slicify App Development. Apr 16, 2019 -  Feb 1, 2020.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client credited Xavier with maintainable React code that the company could continue using and direct, honest feedback on product ideas. Verified client excerpt: His methodical approach to writing code resulted in a easily maintainable code",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contribution"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client credited Xavier with maintainable React code that the company could continue using and direct, honest feedback on product ideas.",
      attribution: "Upwork client, 4.9/5",
      quote: "His methodical approach to writing code resulted in a easily maintainable code"
    },
    presentation: {
      shareTitle: "Slicify application development (2019)",
      shareDescription:
        "I developed maintainable React code for Slicify and gave the team direct feedback on product ideas."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React: leave code the team can continue using",
          explanation:
            "I developed React code the client described as easy to maintain. Readable components and clear responsibilities help a team understand a feature after the original author leaves.",
          tradeoff:
            "Clever abstractions can make a small change harder to follow. I favor clarity around the work the component actually does."
        },
        {
          title: "Product feedback: connect implementation to the idea",
          explanation:
            "I gave the team direct feedback on product ideas alongside the development work. Technical judgment includes explaining how a feature affects usability, scope, and future changes.",
          tradeoff:
            "Feedback is most useful when it makes a decision clearer and leaves product priorities with the client."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-13",
      slug: "react-interface-2019",
      name: "React interface implementation",
      workType: "client-work",
      startDate: "2019-05-19",
      endDate: "2019-08-04"
    },
    publication: "ready",
    summary:
      "I brought product interface designs to life in React, with the client recognizing the accuracy of the finished screens.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "A small team was building a tool for turning text into visual communication. It needed React interfaces developed in close collaboration with product and design."
      ],
      evidenceIds: ["contract", "contribution", "job-description"]
    },
    contribution: {
      title: "Turning the interface designs into React screens",
      paragraphs: [
        "I implemented the product screens in React as part of the team. The client specifically recognized the accuracy of the interface work against the intended design."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement:
          "Expert React Engineer needed to bring pixel perfect web app UI to life. May 19, 2019 -  Aug 4, 2019.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed accurate implementation of product screens in React and valued Xavier as part of the engineering team. Verified client excerpt: using his React expertise to bring pixel perfect screens to life as promised.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "The post described a product that turns text into visual communication. It requested React/Redux interfaces, service API connections, custom Draft.js editor components, and interactive HTML/CSS templates in collaboration with product, design, and backend engineers. The described company stack and AI engine are product context, not Xavier's verified ownership.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~010e8ced8f7479e442",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contribution"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client confirmed accurate implementation of product screens in React and valued Xavier as part of the engineering team.",
      attribution: "Upwork client, 5.0/5",
      quote: "using his React expertise to bring pixel perfect screens to life as promised."
    },
    presentation: {
      shareTitle: "React interface implementation (2019)",
      shareDescription:
        "I brought product interface designs to life in React, with the client recognizing the accuracy of the finished screens."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React: preserve design intent through implementation",
          explanation:
            "I implemented the product screens in React, and the client recognized their accuracy. Shared spacing, typography, and component behavior help maintain that intent across the interface.",
          tradeoff:
            "A static design covers one moment. Real content, validation, and smaller screens also need deliberate treatment."
        },
        {
          title: "Interface quality: verify behavior as well as appearance",
          explanation:
            "I look at focus, loading, empty states, and error feedback alongside visual details. These are the moments that determine whether a polished screen is usable.",
          tradeoff:
            "Pixel accuracy is valuable, but rigid dimensions can break the experience when content or screen size changes."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-14",
      slug: "react-native-consulting-2019",
      name: "Brief React Native engagement",
      workType: "client-work",
      startDate: "2019-04-15",
      endDate: "2019-05-03"
    },
    publication: "ready",
    summary: "A brief React Native engagement for a startup building a graph-based AI application.",
    situation: {
      title: "The work",
      paragraphs: ["The client was developing a mobile application at a startup working with graph-based AI."],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement:
          "React Native Mobile app developer needed for a stealth hot silicon valley startup graph based AI app. Apr 15, 2019 -  May 3, 2019.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "client-feedback",
        basis: "client-feedback",
        state: "observed",
        statement: "Client rating 5.0/5, without written feedback.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React Native",
        evidenceIds: ["contract"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "client-feedback",
      summary: "Client rating 5.0/5, without written feedback.",
      attribution: "Upwork client, 5.0/5"
    },
    presentation: {
      shareTitle: "Brief React Native engagement (2019)",
      shareDescription: "A brief React Native engagement for a startup building a graph-based AI application."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The contract was for React Native mobile development. The public record contains a client rating and identifies the application context, while the detailed job description is private."
      ],
      evidenceIds: ["contract", "client-feedback"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React Native: share logic with care for the device",
          explanation:
            "React Native combines React’s component model with native platform capabilities. I separate reusable screen logic from behavior that depends on the device or operating system.",
          tradeoff:
            "Shared code still needs platform-specific checks for navigation, permissions, and native integrations."
        },
        {
          title: "Request state: keep the user informed",
          explanation:
            "A screen waiting for a remote result needs clear progress and a useful failure path. Redux is one example of a store for coordinating that behavior across screens.",
          tradeoff: "Example option: a state library does not decide retry behavior or explain an error to the user."
        }
      ],
      examples: ["redux"]
    }
  },
  {
    identity: {
      id: "UW-15",
      slug: "web-mobile-crash-fix-2019",
      name: "Web and mobile crash diagnosis",
      workType: "client-work",
      startDate: "2019-03-15",
      endDate: "2019-03-15"
    },
    publication: "ready",
    summary:
      "I diagnosed a crash and repaired the React website and Node.js server, with related changes to the React Native app.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "A health company had unexplained crashes affecting its website and mobile app. Its team needed help finding the cause across a React, React Native, and Node.js system."
      ],
      evidenceIds: ["contract", "contribution", "job-description"]
    },
    contribution: {
      title: "Diagnosis, repair, and a clear explanation",
      paragraphs: [
        "I identified the problem, fixed the React website and Node.js server, and modified the React Native app. I also explained the cause to the in-house developer and the nontechnical manager."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "React expert to fix bugs in website and mobile app. Mar 15, 2019 -  Mar 15, 2019.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed crash diagnosis, fixes to the React website and Node.js server, changes to the React Native app, and explanations to the in-house developer and nontechnical manager. Verified client excerpt: he modified the React Native app and fixed the issue in NodeJS server.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "A health company reported unexplained crashes affecting its website and mobile app. The post named React, React Native, and Node.js and requested an experienced developer to diagnose and repair the problem.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/01SnUZMj3T-OcVoozfzxqOhjoWjf4fBPFLy6RVgV1vsHg=",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contribution"]
      },
      {
        name: "React Native",
        evidenceIds: ["contribution"]
      },
      {
        name: "Node.js",
        evidenceIds: ["contribution"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client confirmed crash diagnosis, fixes to the React website and Node.js server, changes to the React Native app, and explanations to the in-house developer and nontechnical manager.",
      attribution: "Upwork client, 5.0/5",
      quote: "he modified the React Native app and fixed the issue in NodeJS server."
    },
    presentation: {
      shareTitle: "Web and mobile crash diagnosis (2019)",
      shareDescription:
        "I diagnosed a crash and repaired the React website and Node.js server, with related changes to the React Native app."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React + Node.js: follow the failure across layers",
          explanation:
            "I diagnosed the crash, repaired the website and server, and changed the React Native app. The important boundary was the full interaction across those parts of the system.",
          tradeoff:
            "A local symptom can originate elsewhere. A correction needs verification through the affected flow."
        },
        {
          title: "Technical handoff: make the cause understandable",
          explanation:
            "I explained the cause to both the in-house developer and the nontechnical manager. That gives the team a useful explanation to carry forward after the fix.",
          tradeoff:
            "The developer needs enough detail to maintain the change; the manager needs to understand its effect and remaining limits."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-16",
      slug: "react-redux-full-stack-2019",
      name: "React and Redux application development",
      workType: "client-work",
      startDate: "2019-01-03",
      endDate: "2019-02-04"
    },
    publication: "ready",
    summary: "A full-stack web application engagement centered on React and Redux.",
    situation: {
      title: "The work",
      paragraphs: [
        "The client hired for full-stack web application development with React and Redux named in the role."
      ],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "React JS Redux Full Stack Web application developer. Jan 3, 2019 -  Feb 4, 2019.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contract"]
      },
      {
        name: "Redux",
        evidenceIds: ["contract"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "removed"
    },
    presentation: {
      shareTitle: "React and Redux application development (2019)",
      shareDescription: "A full-stack web application engagement centered on React and Redux."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The recorded engagement connects React interface development with Redux application state. Backend services and individual features are not named in the available record."
      ],
      evidenceIds: ["contract"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React + Redux: separate presentation from state changes",
          explanation:
            "React handles what the user sees; Redux organizes shared state transitions. I keep request handling and data transformations separate from visual components.",
          tradeoff:
            "A predictable store still needs a clear model. Putting every value in Redux makes ownership harder to follow."
        },
        {
          title: "UI components: make repeated controls predictable",
          explanation:
            "Consistent forms and feedback reduce the number of interaction patterns users and developers must learn. Material UI is one example of a component system for that job.",
          tradeoff:
            "Example option: a component library needs customization and accessibility checks against the actual product design."
        }
      ],
      examples: ["redux", "material-ui"]
    }
  },
  {
    identity: {
      id: "UW-17",
      slug: "consumer-web-app-2018",
      name: "Consumer web application development",
      workType: "client-work",
      startDate: "2018-04-20",
      endDate: "2018-12-04"
    },
    publication: "ready",
    summary: "I joined an established Node.js application team and contributed using React, Relay, and GraphQL.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "An existing consumer web application needed development support across several improvements in an established codebase."
      ],
      evidenceIds: ["contract", "contribution", "job-description"]
    },
    contribution: {
      title: "Getting productive in an existing application",
      paragraphs: [
        "I ramped up on the application and worked with React, Relay, and GraphQL within the team's development process. The client highlighted my quick onboarding, communication, and contribution to the project."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Development help needed for top-rated consumer Web application. Apr 20, 2018 -  Dec 4, 2018.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed work on an existing Node.js web application with React, Relay, and GraphQL, quick onboarding, effective communication, and adherence to the development process. Verified client excerpt: He ramped up on our application very quickly and immediately added value to the project",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "The post requested JavaScript, Node.js, and React development across several improvements to an existing consumer web application. The advertised audience size was a client assertion, not an outcome produced by Xavier.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~01d49c9ab53856472d",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "Node.js",
        evidenceIds: ["contribution"]
      },
      {
        name: "React",
        evidenceIds: ["contribution"]
      },
      {
        name: "Relay",
        evidenceIds: ["contribution"]
      },
      {
        name: "GraphQL",
        evidenceIds: ["contribution"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client confirmed work on an existing Node.js web application with React, Relay, and GraphQL, quick onboarding, effective communication, and adherence to the development process.",
      attribution: "Upwork client, 5.0/5",
      quote: "He ramped up on our application very quickly and immediately added value to the project"
    },
    presentation: {
      shareTitle: "Consumer web application development (2018)",
      shareDescription:
        "I joined an established Node.js application team and contributed using React, Relay, and GraphQL."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React + Relay + GraphQL: work with the existing data model",
          explanation:
            "I joined the application team and contributed within its established stack and development process. Relay and GraphQL connect interface data requirements to the API schema.",
          tradeoff:
            "An established stack has conventions and constraints. Understanding them is part of contributing safely and quickly."
        },
        {
          title: "Onboarding: build context before broad changes",
          explanation:
            "The client highlighted my quick onboarding and immediate contribution. Working within an existing product requires understanding behavior, team expectations, and the boundaries of each change.",
          tradeoff:
            "A local improvement can disrupt assumptions elsewhere. Clear communication helps the team assess the change in context."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-18",
      slug: "react-wallet-2017",
      name: "React web and native wallet development",
      workType: "client-work",
      startDate: "2017-08-08",
      endDate: "2018-10-03"
    },
    publication: "ready",
    summary: "I contributed across frontend and backend work for web and mobile wallet applications.",
    situation: {
      title: "The client situation",
      paragraphs: ["The engagement covered web and mobile development for a cryptocurrency wallet application."],
      evidenceIds: ["contract", "contribution"]
    },
    contribution: {
      title: "Contributing across web, mobile, and backend work",
      paragraphs: [
        "I contributed to both frontend and backend development. The client named Node.js, Linux, frontend frameworks, and testing packages as part of the work."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "React (native and web) cryptocurrency wallet application development. Aug 8, 2017 -  Oct 3, 2018.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed frontend and backend contributions to mobile and web applications using Node.js, Linux, frontend frameworks, and testing packages. The feedback does not name specific features or testing packages. Verified client excerpt: both front-end and back-end technologies for building mobile- and web-apps.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "Node.js",
        evidenceIds: ["contribution"]
      },
      {
        name: "Linux",
        evidenceIds: ["contribution"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client recognized contributions across frontend and backend work for mobile and web apps, including Node.js, Linux, and testing tools.",
      attribution: "Upwork client, 5.0/5",
      quote: "both front-end and back-end technologies for building mobile- and web-apps."
    },
    presentation: {
      shareTitle: "React web and native wallet development (2017)",
      shareDescription: "I contributed across frontend and backend work for web and mobile wallet applications."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Node.js: connect frontend behavior to server responsibilities",
          explanation:
            "I contributed across the frontend and backend of web and mobile applications. Clear API boundaries help keep validation and privileged actions consistent across clients.",
          tradeoff: "Client-side feedback improves usability, but server-side checks must remain authoritative."
        },
        {
          title: "Web and mobile: keep behavior consistent across surfaces",
          explanation:
            "The same workflow can appear on different devices. I look for shared rules and make loading, failure, and recovery behavior explicit at each interface.",
          tradeoff: "Device capabilities and interaction patterns differ. Consistency needs room for those differences."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-19",
      slug: "ai-company-frontend-2018",
      name: "React frontend for an AI company",
      workType: "client-work",
      startDate: "2018-02-21",
      endDate: "2018-03-19"
    },
    publication: "ready",
    summary: "React frontend development for an AI company.",
    situation: {
      title: "The work",
      paragraphs: ["An AI company needed React development for its product interface."],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "ReactJS developer for AI company. Feb 21, 2018 -  Mar 19, 2018.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["contract"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "none"
    },
    presentation: {
      shareTitle: "React frontend for an AI company (2018)",
      shareDescription: "React frontend development for an AI company."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The engagement was scoped as React frontend work. The company's AI focus describes the product setting; the available record does not identify a particular user workflow."
      ],
      evidenceIds: ["contract"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React: make complex capabilities understandable",
          explanation:
            "An interface around backend computation needs clear inputs, progress, and results. I keep presentation responsibilities separate from the underlying computation.",
          tradeoff:
            "A polished frontend should accurately communicate uncertainty and failure; it cannot make the underlying system more reliable by appearance alone."
        },
        {
          title: "Forms and feedback: guide the next useful action",
          explanation:
            "Reusable controls help users understand what to enter and what happens next. Material UI is one example of a component system for consistent forms and feedback.",
          tradeoff:
            "Example option: a library supplies controls, while product-specific instructions and error handling still need design."
        }
      ],
      examples: ["material-ui"]
    }
  },
  {
    identity: {
      id: "UW-20",
      slug: "mobile-app-2017",
      name: "Brief mobile application engagement",
      workType: "client-work",
      startDate: "2017-10-09",
      endDate: "2018-01-20"
    },
    publication: "ready",
    summary: "A focused mobile application development engagement recorded between October 2017 and January 2018.",
    situation: {
      title: "The work",
      paragraphs: ["The client engaged mobile application development support."],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Mobile App Development. Oct 9, 2017 -  Jan 20, 2018.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "none"
    },
    presentation: {
      shareTitle: "Brief mobile application engagement (2017)",
      shareDescription:
        "A focused mobile application development engagement recorded between October 2017 and January 2018."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The public contract is recorded as Mobile App Development. This brief preserves the engagement and its period without expanding it into a claim of building an entire application."
      ],
      evidenceIds: ["contract"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Mobile behavior: make screen transitions predictable",
          explanation:
            "I treat navigation, data changes, and recovery as one experience. A user needs to understand where an action leads and what remains available when a request fails.",
          tradeoff:
            "Correct behavior on one screen can still create a confusing sequence. Verification needs to follow the full interaction."
        },
        {
          title: "Shared state: keep screens in agreement",
          explanation:
            "A shared store helps when several screens depend on the same changing information. Redux is an example of an option available during this engagement’s period.",
          tradeoff:
            "Example option: the store should coordinate shared information without taking over every local interaction."
        }
      ],
      examples: ["redux"]
    }
  },
  {
    identity: {
      id: "UW-21",
      slug: "react-dashboard-2017",
      name: "Desktop React dashboard",
      workType: "client-work",
      startDate: "2017-07-03",
      endDate: "2017-11-21"
    },
    publication: "ready",
    summary: "I collaborated with the client's team to deliver a React desktop dashboard application.",
    situation: {
      title: "The client situation",
      paragraphs: ["The team needed desktop dashboard implementation in React as part of a complex application."],
      evidenceIds: ["contract", "client-feedback"]
    },
    contribution: {
      title: "React dashboard development with the client team",
      paragraphs: [
        "I worked closely with the team on the React application. The client confirmed that my contribution helped it deliver the application."
      ],
      evidenceIds: ["client-feedback"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Dashboard implementation in ReactJS – Desktop. Jul 3, 2017 -  Nov 21, 2017.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "client-feedback",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed close collaboration with its team to deliver a complex React application. The contract title identifies desktop dashboard implementation. Verified client excerpt: He collaborated closely with our team to help us deliver a complex ReactJS application.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["client-feedback"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "client-feedback",
      summary:
        "The client confirmed close collaboration with its team to deliver a complex React application. The contract title identifies desktop dashboard implementation.",
      attribution: "Upwork client, 5.0/5",
      quote: "He collaborated closely with our team to help us deliver a complex ReactJS application."
    },
    presentation: {
      shareTitle: "Desktop React dashboard (2017)",
      shareDescription: "I collaborated with the client's team to deliver a React desktop dashboard application."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React: organize complexity around the user’s task",
          explanation:
            "I collaborated with the team to deliver the React dashboard. Reusable views help keep repeated information and interaction patterns consistent as the interface grows.",
          tradeoff:
            "A dashboard can show more information than a person can use. The hierarchy needs to make the next decision easier."
        },
        {
          title: "Data states: explain what the dashboard knows",
          explanation:
            "I distinguish loading, empty, failed, and available data in interface work. These states help users interpret what they see and decide whether to wait or act.",
          tradeoff:
            "A blank panel is ambiguous. The interface needs to explain whether there is no data or whether retrieval failed."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-22",
      slug: "react-native-build-fix-2017",
      name: "React Native build troubleshooting",
      workType: "client-work",
      startDate: "2017-10-06",
      endDate: "2017-10-06"
    },
    publication: "ready",
    summary: "I helped a server-side development team resolve a build issue in an inherited React Native application.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "A server-side development company inherited a mobile app with a build issue that it lacked the expertise to resolve in-house."
      ],
      evidenceIds: ["contract", "contribution"]
    },
    contribution: {
      title: "Getting an inherited mobile application building",
      paragraphs: [
        "I helped resolve the inherited application's build issue during a one-day engagement. The client specifically confirmed that troubleshooting contribution."
      ],
      evidenceIds: ["contribution"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "React Native Developer - iOS and Android. Oct 6, 2017 -  Oct 6, 2017.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client, a server-side development company, confirmed help resolving a build issue in a mobile app it had inherited, for which it lacked in-house expertise. Verified client excerpt: resolve a build issue we didn't have capability for in house.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React Native",
        evidenceIds: ["contract"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client, a server-side development company, confirmed help resolving a build issue in a mobile app it had inherited, for which it lacked in-house expertise.",
      attribution: "Upwork client, 5.0/5",
      quote: "resolve a build issue we didn't have capability for in house."
    },
    presentation: {
      shareTitle: "React Native build troubleshooting (2017)",
      shareDescription:
        "I helped a server-side development team resolve a build issue in an inherited React Native application."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "React Native builds: isolate the failing boundary",
          explanation:
            "I helped resolve a build issue in an inherited application. Mobile builds depend on JavaScript dependencies and native tooling, so the failure needs to be traced to the responsible layer.",
          tradeoff:
            "Broad upgrades can introduce new incompatibilities. A focused fix is easier to verify and hand back."
        },
        {
          title: "Inherited code: restore a dependable starting point",
          explanation:
            "A working build gives the team a basis for continuing development. I look for the smallest reproducible failure and the configuration needed to verify the correction.",
          tradeoff: "A successful build establishes a starting point; it does not prove every runtime workflow works."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-23",
      slug: "catalog-continuation-2017",
      name: "Catalog development, continuation",
      workType: "client-work",
      startDate: "2017-08-23",
      endDate: "2017-09-19"
    },
    publication: "ready",
    summary: "Further development on a catalog application during an August to September 2017 engagement.",
    situation: {
      title: "The work",
      paragraphs: ["The client had continuing development work for a catalog application."],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "continuación trabajos catalogo. Aug 23, 2017 -  Sep 19, 2017.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "client-feedback",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client praised the work and repeat collaboration but did not describe a specific feature or change. Verified client excerpt: Great job by Xavier again! his performance is great as usual!",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "client-feedback",
      summary:
        "The client praised the work and repeat collaboration but did not describe a specific feature or change.",
      attribution: "Upwork client, 5.0/5",
      quote: "Great job by Xavier again! his performance is great as usual!"
    },
    presentation: {
      shareTitle: "Catalog development, continuation (2017)",
      shareDescription: "Further development on a catalog application during an August to September 2017 engagement."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The contract title describes a continuation of catalog work. The client praised the collaboration and the quality of the work in its review."
      ],
      evidenceIds: ["contract", "client-feedback"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Catalog changes: preserve the behavior people rely on",
          explanation:
            "Continuing a catalog means working with existing selection, editing, and refresh behavior. I make those transitions explicit before adding another increment.",
          tradeoff:
            "A small interface change can affect an established workflow. Regression checks should follow those dependencies."
        },
        {
          title: "Shared state: keep views of the catalog consistent",
          explanation:
            "Redux is one example of a way to coordinate shared selections and updates in a React implementation. Explicit actions make a change easier to follow through the interface.",
          tradeoff:
            "Example option: server data still needs a clear refresh strategy so a shared store does not display stale information."
        }
      ],
      examples: ["redux"]
    }
  },
  {
    identity: {
      id: "UW-24",
      slug: "catalog-login-import-export-2017",
      name: "Catalog login and import/export",
      workType: "client-work",
      startDate: "2017-08-14",
      endDate: "2017-08-22"
    },
    publication: "ready",
    summary: "Login and import/export functionality for a catalog application.",
    situation: {
      title: "The work",
      paragraphs: [
        "The client needed a catalog application to support access and moving data into and out of the system."
      ],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Desarrollo App Catalogo - Funcionalidades Login + Import/export. Aug 14, 2017 -  Aug 22, 2017.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "none"
    },
    presentation: {
      shareTitle: "Catalog login and import/export (2017)",
      shareDescription: "Login and import/export functionality for a catalog application."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The job title names login and import/export as the requested functionality. It does not specify the identity provider, file format, or storage service."
      ],
      evidenceIds: ["contract"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Import/export: make data changes understandable",
          explanation:
            "An import flow needs validation before changes are applied and a clear result afterward. I make rejected records and partial failures visible so the user knows what needs attention.",
          tradeoff:
            "A completed upload does not prove every record was accepted. The result needs to distinguish transfer from validation."
        },
        {
          title: "Login: separate access from screen state",
          explanation:
            "Authentication establishes identity; authorization determines permitted actions. I keep those responsibilities separate from interface states such as progress or a disabled button.",
          tradeoff: "Hiding a control is not an access rule. The operation needs server-side permission checks."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-25",
      slug: "ur-money-maintenance-2017",
      name: "UR money fixes and database research",
      workType: "client-work",
      startDate: "2017-07-18",
      endDate: "2017-08-08"
    },
    publication: "ready",
    summary: "Bug fixes and database research for UR money.",
    situation: {
      title: "The work",
      paragraphs: ["The UR money project needed maintenance work and investigation of its database needs."],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Bug fixes and database research for UR money. Jul 18, 2017 -  Aug 8, 2017.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "client-feedback",
        basis: "client-feedback",
        state: "observed",
        statement: "Client rating 5.0/5, without written feedback.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "client-feedback",
      summary: "Client rating 5.0/5, without written feedback.",
      attribution: "Upwork client, 5.0/5"
    },
    presentation: {
      shareTitle: "UR money fixes and database research (2017)",
      shareDescription: "Bug fixes and database research for UR money."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The contract combined bug fixing with database research. These are recorded as a separate engagement from the longer mobile and wallet contracts."
      ],
      evidenceIds: ["contract", "client-feedback"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Database research: start with the question and access pattern",
          explanation:
            "I connect a database investigation to the behavior that needs explaining: the data shape, the relevant query, and the result the application expects.",
          tradeoff:
            "A database choice or index is useful only in relation to the actual reads, writes, and consistency requirements."
        },
        {
          title: "Bug fixes: turn findings into a checkable change",
          explanation:
            "A useful investigation produces a reproducible case and a clear way to verify a correction. That keeps the next engineering step connected to the original problem.",
          tradeoff:
            "Changing storage behavior can affect existing data and callers. The verification needs to account for those dependencies."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-26",
      slug: "ionic-mobile-app-2016",
      name: "Ionic mobile app, my first Upwork project",
      workType: "client-work",
      startDate: "2016-07-04",
      endDate: "2017-07-13"
    },
    publication: "ready",
    summary: "My first Upwork project: helping create and launch an Ionic mobile application.",
    situation: {
      title: "The client situation",
      paragraphs: [
        "A startup was developing a mobile app using Ionic 2, Angular 2, Firebase, and TypeScript and needed help adding features toward launch."
      ],
      evidenceIds: ["contract", "contribution", "job-description"]
    },
    contribution: {
      title: "Helping the mobile app reach launch",
      paragraphs: [
        "I contributed to the application's creation and launch. The client highlighted my attention to detail and work with Ionic, TypeScript, and Node. This was my first Upwork project."
      ],
      evidenceIds: ["contribution", "first-project"]
    },
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Add features to a mobile app. Jul 4, 2016 -  Jul 13, 2017.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "contribution",
        basis: "client-feedback",
        state: "observed",
        statement:
          "The client confirmed a key contribution to creating and launching the mobile app and named Ionic, TypeScript, and Node among Xavier's technical strengths. Verified client excerpt: played a key role on the creation and launch of our mobile app.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "first-project",
        basis: "owner-confirmation",
        state: "observed",
        statement: "Xavier confirmed this Ionic engagement was his first Upwork project.",
        scope: "Owner confirmation on September 20, 2026, recorded in XAP-191.",
        source: {
          label: "Xavier Perez",
          access: "privately-verified",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "The post described an Ionic 2, Angular 2, Firebase, and TypeScript mobile application. Requested additions included international phone input, QR contact exchange, a transaction API, platform-specific behavior, charts, and a home screen. Further project details were NDA-bound. The request does not prove each listed feature was delivered.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~01c4c1cbdfa072e69a",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "Ionic",
        evidenceIds: ["contribution"]
      },
      {
        name: "TypeScript",
        evidenceIds: ["contribution"]
      },
      {
        name: "Node.js",
        evidenceIds: ["contribution"]
      }
    ],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "contribution",
      summary:
        "The client confirmed a key contribution to creating and launching the mobile app and named Ionic, TypeScript, and Node among Xavier's technical strengths.",
      attribution: "Upwork client, 5.0/5",
      quote: "played a key role on the creation and launch of our mobile app."
    },
    presentation: {
      shareTitle: "Ionic mobile app, my first Upwork project (2016)",
      shareDescription: "My first Upwork project: helping create and launch an Ionic mobile application."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Ionic + TypeScript: connect mobile UI to maintainable code",
          explanation:
            "I contributed to the application’s creation and launch using the skills the client highlighted: Ionic, TypeScript, and Node.js. TypeScript helps make expected data shapes explicit during development.",
          tradeoff: "Static types do not validate incoming data at runtime. API boundaries still need checks."
        },
        {
          title: "Node.js: give the mobile client a clear service boundary",
          explanation:
            "A mobile application benefits from consistent server responses and well-defined responsibilities. I keep privileged operations and validation in the server layer.",
          tradeoff:
            "Mobile connections are variable. Interface behavior needs to account for waiting, failed requests, and recovery."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-27",
      slug: "mobile-corrections-2017-mar-30",
      name: "Mobile corrections, March 30 contract",
      workType: "client-work",
      startDate: "2017-03-30",
      endDate: "2017-05-12"
    },
    publication: "ready",
    summary: "Mobile application corrections during the March 30 to May 12, 2017 contract.",
    situation: {
      title: "The work",
      paragraphs: ["The client engaged support to correct behavior in a mobile application."],
      evidenceIds: ["contract"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Correcciones en Aplicación Móvil. Mar 30, 2017 -  May 12, 2017.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "none"
    },
    presentation: {
      shareTitle: "Mobile corrections, March 30 contract (2017)",
      shareDescription: "Mobile application corrections during the March 30 to May 12, 2017 contract."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "This contract records mobile application corrections over the later 2017 engagement. It remains a separate record from the short March 27 contract with the same title."
      ],
      evidenceIds: ["contract"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Mobile corrections: reproduce the sequence, not just the screen",
          explanation:
            "I trace the actions and state changes leading to a problem. Repeating that sequence after the fix provides a concrete check against the reported behavior.",
          tradeoff:
            "A correction can affect the next interaction. Nearby navigation and state transitions belong in the verification."
        },
        {
          title: "State transitions: make changes inspectable",
          explanation:
            "Explicit state changes help explain why a mobile interface reached the wrong state. Redux is one example of a tool for inspecting those transitions in a React-based application.",
          tradeoff: "Example option: adding a library is not a substitute for understanding the existing state model."
        }
      ],
      examples: ["redux"]
    }
  },
  {
    identity: {
      id: "UW-28",
      slug: "mobile-corrections-2017-mar-27",
      name: "Mobile corrections, March 27 contract",
      workType: "client-work",
      startDate: "2017-03-27",
      endDate: "2017-03-29"
    },
    publication: "ready",
    summary: "A short mobile application corrections engagement from March 27 to March 29, 2017.",
    situation: {
      title: "The work",
      paragraphs: ["The client requested a set of corrections to an existing mobile application."],
      evidenceIds: ["job-description"]
    },
    contribution: null,
    implementation: [],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Correcciones en Aplicación Móvil. Mar 27, 2017 -  Mar 29, 2017.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "client-feedback",
        basis: "client-feedback",
        state: "observed",
        statement: "Client rating 4.7/5, without written feedback.",
        scope:
          "Client-side feedback directly read in the contract dialog. The rating is not the freelancer's review of the client. No additional implementation details are inferred.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "job-description",
        basis: "job-description",
        state: "observed",
        statement:
          "The available description says the mobile corrections are listed in a separate document. That document is not present in the visible description, so the actual correction requirements remain unavailable.",
        scope:
          "Original job description expanded and read in the contract dialog. Requested work and qualifications are not proof of delivered scope.",
        source: {
          label: "Original Upwork job description",
          href: "https://www.upwork.com/jobs/~011a7db32e7f619b6b",
          access: "public",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [],
    contract: {
      state: "completed",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "not-established"
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "available",
      evidenceId: "client-feedback",
      summary: "Client rating 4.7/5, without written feedback.",
      attribution: "Upwork client, 4.7/5"
    },
    presentation: {
      shareTitle: "Mobile corrections, March 27 contract (2017)",
      shareDescription: "A short mobile application corrections engagement from March 27 to March 29, 2017."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "engagement-brief",
    scope: {
      title: "Engagement scope",
      paragraphs: [
        "The available description refers to a separate list of corrections. The Upwork record confirms the short contract period and client rating; the referenced list is not publicly available."
      ],
      evidenceIds: ["job-description", "client-feedback"]
    },
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "Focused fixes: keep the correction easy to verify",
          explanation:
            "A short correction task benefits from a narrow reproduction case, a clear change, and a repeatable check. I keep the work connected to the behavior that needs repair.",
          tradeoff:
            "Expanding a small fix into a broad rewrite increases the amount of behavior the team has to recheck."
        },
        {
          title: "Regression checks: include the adjacent interaction",
          explanation:
            "I check what happens immediately before and after the changed behavior. This helps reveal whether the correction disrupted a neighboring part of the flow.",
          tradeoff:
            "A single successful attempt is weak evidence for an intermittent failure. The reproduction conditions matter."
        }
      ],
      examples: []
    }
  },
  {
    identity: {
      id: "UW-29",
      slug: "next-react-aws-2023",
      name: "Next.js and AWS full-stack development",
      workType: "client-work",
      startDate: "2023-03-08",
      endDate: null
    },
    publication: "ready",
    summary:
      "Frontend and backend delivery with React, Next.js, MongoDB, and AWS. The work is delivered; the Upwork contract remains open.",
    situation: {
      title: "The engagement",
      paragraphs: [
        "A full-stack engagement spanning a React and Next.js frontend, a MongoDB data layer, and AWS services."
      ],
      evidenceIds: ["owner"]
    },
    contribution: {
      title: "Frontend, backend, and cloud development",
      paragraphs: [
        "I worked across the frontend and backend using React, Next.js, and MongoDB. The AWS work included CDK, Lambda, EventBridge, and API Gateway.",
        "The delivery is finished. Upwork still lists the contract as open, so its displayed period is separate from the actual work status."
      ],
      evidenceIds: ["owner"]
    },
    implementation: [
      {
        title: "AI-assisted implementation",
        paragraphs: [
          "My delivery workflow included orchestration with Codex and Claude Code alongside the application and infrastructure work."
        ],
        evidenceIds: ["delivery-method"]
      }
    ],
    evidence: [
      {
        id: "contract",
        basis: "contract-record",
        state: "observed",
        statement: "Next & React. Mar 8, 2023 - Present on Upwork.",
        scope:
          "Contract identity and platform state directly read in the Upwork public-view profile in Edge on September 20, 2026. Dates do not imply continuous full-time work.",
        source: {
          label: "Upwork public work history, read in Edge",
          href: "https://www.upwork.com/freelancers/xavierperez",
          access: "public",
          asOf: "2026-09-20"
        }
      },
      {
        id: "owner",
        basis: "owner-confirmation",
        state: "observed",
        statement:
          "Xavier confirmed frontend and backend work using React/Next.js, MongoDB, AWS CDK, Lambda, EventBridge and API Gateway. He reports that delivery is finished.",
        scope:
          "Owner confirmation recorded on September 20, 2026. Actual delivery end date and concrete workflow remain unconfirmed.",
        source: {
          label: "Xavier Perez",
          access: "privately-verified",
          asOf: "2026-09-20"
        }
      },
      {
        id: "delivery-method",
        basis: "owner-confirmation",
        state: "observed",
        statement: "Xavier confirmed substantial Codex and Claude Code orchestration as part of the delivery workflow.",
        scope:
          "Owner confirmation recorded September 20, 2026 in the dedicated page brief. No start date is assigned to these tools and no product AI runtime is implied.",
        source: {
          label: "Xavier Perez",
          access: "privately-verified",
          asOf: "2026-09-20"
        }
      }
    ],
    technologies: [
      {
        name: "React",
        evidenceIds: ["owner"]
      },
      {
        name: "Next.js",
        evidenceIds: ["owner"]
      },
      {
        name: "MongoDB",
        evidenceIds: ["owner"]
      },
      {
        name: "AWS CDK",
        evidenceIds: ["owner"]
      },
      {
        name: "AWS Lambda",
        evidenceIds: ["owner"]
      },
      {
        name: "Amazon EventBridge",
        evidenceIds: ["owner"]
      },
      {
        name: "Amazon API Gateway",
        evidenceIds: ["owner"]
      }
    ],
    contract: {
      state: "open",
      observedAt: "2026-09-20",
      evidenceId: "contract"
    },
    delivery: {
      state: "delivered",
      evidenceId: "owner",
      completedAt: null
    },
    product: {
      state: "not-verified"
    },
    feedback: {
      state: "not-yet-left"
    },
    presentation: {
      shareTitle: "Next.js and AWS full-stack development (2023)",
      shareDescription:
        "Frontend and backend delivery with React, Next.js, MongoDB, and AWS. The work is delivered; the Upwork contract remains open."
    },
    assets: [],
    links: [
      {
        label: "Upwork work history",
        href: "https://www.upwork.com/freelancers/xavierperez",
        kind: "source",
        status: "verified"
      }
    ],
    relatedSlugs: [],
    format: "case-note",
    technicalContext: {
      illustrative: true,
      points: [
        {
          title: "MongoDB: model data around how it is used",
          explanation:
            "I worked with MongoDB on the data layer. Its document model supports related fields and nested structures; the key design question is which data the application reads and updates together.",
          tradeoff:
            "Flexible documents still need validation and indexes. Embedding simplifies some reads, while references can suit data that changes independently."
        },
        {
          title: "AWS CDK: make infrastructure changes reviewable",
          explanation:
            "My AWS work included CDK. Defining infrastructure in code makes its configuration versionable and gives the team a concrete change to inspect before applying it.",
          tradeoff:
            "Code does not remove deployment risk. Permissions, stateful resources, and environment differences still need review."
        },
        {
          title: "Lambda + EventBridge + API Gateway: give services clear roles",
          explanation:
            "I worked with these services across the backend. API Gateway exposes request endpoints, Lambda runs application logic, and EventBridge routes events between parts of a system.",
          tradeoff:
            "Event-driven work needs deliberate retry and duplicate-handling behavior. Service choice alone does not guarantee dependable delivery."
        }
      ],
      examples: []
    }
  }
];
