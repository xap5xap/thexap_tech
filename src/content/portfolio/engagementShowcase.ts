export type EngagementCategory =
  | "Web & product"
  | "Full stack & cloud"
  | "Mobile"
  | "Testing & reliability"
  | "Data & workflows";
export type EngagementVisual = "cloud" | "interface" | "mobile" | "quality" | "data" | "product";

export type EngagementShowcase = {
  headline: string;
  role: string;
  category: EngagementCategory;
  strengths: string[];
  visual: EngagementVisual;
};

// Public editorial presentation. Titles describe the recorded work, not invented outcomes.
const entries: Record<string, EngagementShowcase> = {
  "UW-01": {
    headline: "Senior React expertise. Dependable delivery.",
    role: "Senior full-stack developer",
    category: "Full stack & cloud",
    strengths: ["React & Next.js", "Remote collaboration", "On-time delivery"],
    visual: "interface"
  },
  "UW-02": {
    headline: "React interfaces for the long run.",
    role: "React frontend developer",
    category: "Web & product",
    strengths: ["Web applications", "React development", "Ongoing collaboration"],
    visual: "interface"
  },
  "UW-03": {
    headline: "Interactive tools for a world of research.",
    role: "React & Next.js developer",
    category: "Web & product",
    strengths: ["Research tools", "Interface development", "Firebase context"],
    visual: "data"
  },
  "UW-04": {
    headline: "Tests that reach beyond the interface.",
    role: "Test automation engineer",
    category: "Testing & reliability",
    strengths: ["Integration testing", "Backend emulators", "React & Nx"],
    visual: "quality"
  },
  "UW-05": {
    headline: "React interfaces, down to the details.",
    role: "Senior React developer",
    category: "Web & product",
    strengths: ["Responsive interfaces", "Cross-browser scope", "UI implementation"],
    visual: "interface"
  },
  "UW-06": {
    headline: "A stronger foundation for every release.",
    role: "Cypress test automation developer",
    category: "Testing & reliability",
    strengths: ["End-to-end tests", "Team practices", "New product support"],
    visual: "quality"
  },
  "UW-07": {
    headline: "Connecting the interface to login automation.",
    role: "Node.js & React developer",
    category: "Full stack & cloud",
    strengths: ["Node.js applications", "React frontend", "Login automation"],
    visual: "cloud"
  },
  "UW-08": {
    headline: "From a Google Doc to a working prototype.",
    role: "Frontend product developer",
    category: "Web & product",
    strengths: ["Product prototyping", "React frontend", "Remote teamwork"],
    visual: "product"
  },
  "UW-09": {
    headline: "React and Redux, built to evolve.",
    role: "React & Redux developer",
    category: "Web & product",
    strengths: ["Modular code", "UX judgment", "Continuous testing"],
    visual: "interface"
  },
  "UW-11": {
    headline: "Frontend foundations for a gaming marketplace.",
    role: "React frontend developer",
    category: "Web & product",
    strengths: ["Marketplace interfaces", "React development", "Integration scope"],
    visual: "product"
  },
  "UW-12": {
    headline: "Code the next engineer can build on.",
    role: "React application developer",
    category: "Web & product",
    strengths: ["Maintainable React", "Product feedback", "Team continuity"],
    visual: "interface"
  },
  "UW-13": {
    headline: "Design intent, brought to life in React.",
    role: "React interface engineer",
    category: "Web & product",
    strengths: ["Design implementation", "Interface precision", "Engineering collaboration"],
    visual: "interface"
  },
  "UW-14": {
    headline: "React Native for an ambitious product team.",
    role: "React Native developer",
    category: "Mobile",
    strengths: ["Mobile applications", "React Native", "Startup collaboration"],
    visual: "mobile"
  },
  "UW-15": {
    headline: "Find the crash. Fix the whole picture.",
    role: "Full-stack troubleshooting engineer",
    category: "Testing & reliability",
    strengths: ["Crash diagnosis", "Web & mobile repair", "Clear technical handoff"],
    visual: "quality"
  },
  "UW-16": {
    headline: "React interfaces. Predictable application state.",
    role: "React & Redux full-stack developer",
    category: "Full stack & cloud",
    strengths: ["Full-stack scope", "React interfaces", "Redux state"],
    visual: "cloud"
  },
  "UW-17": {
    headline: "An established product. Immediate contribution.",
    role: "Full-stack web developer",
    category: "Full stack & cloud",
    strengths: ["Fast onboarding", "React & GraphQL", "Existing product work"],
    visual: "cloud"
  },
  "UW-18": {
    headline: "Wallet engineering across web and mobile.",
    role: "Web & mobile full-stack developer",
    category: "Mobile",
    strengths: ["Frontend & backend", "Wallet applications", "Cross-platform work"],
    visual: "mobile"
  },
  "UW-19": {
    headline: "React engineering for an AI team.",
    role: "React frontend developer",
    category: "Web & product",
    strengths: ["React frontend", "Application interfaces", "AI-company context"],
    visual: "product"
  },
  "UW-20": {
    headline: "Focused engineering for a mobile product.",
    role: "Mobile application developer",
    category: "Mobile",
    strengths: ["Mobile development", "Existing product context", "Focused engagement"],
    visual: "mobile"
  },
  "UW-21": {
    headline: "Complex information. A usable React dashboard.",
    role: "React dashboard developer",
    category: "Web & product",
    strengths: ["Dashboard interfaces", "Complex React application", "Team delivery"],
    visual: "data"
  },
  "UW-22": {
    headline: "An inherited app. A build that works.",
    role: "React Native troubleshooting developer",
    category: "Testing & reliability",
    strengths: ["Build troubleshooting", "React Native", "Specialist support"],
    visual: "quality"
  },
  "UW-23": {
    headline: "Keep a catalog product moving forward.",
    role: "Catalog application developer",
    category: "Data & workflows",
    strengths: ["Catalog development", "Repeat collaboration", "Application maintenance"],
    visual: "data"
  },
  "UW-24": {
    headline: "Bring access and catalog workflows together.",
    role: "Catalog application developer",
    category: "Data & workflows",
    strengths: ["Login functionality", "Import & export", "Catalog workflows"],
    visual: "data"
  },
  "UW-25": {
    headline: "Untangle the bugs. Understand the data.",
    role: "Application maintenance developer",
    category: "Data & workflows",
    strengths: ["Bug investigation", "Database research", "Focused maintenance"],
    visual: "data"
  },
  "UW-26": {
    headline: "My first Upwork project. An app brought to life.",
    role: "Ionic mobile developer",
    category: "Mobile",
    strengths: ["Ionic development", "App creation", "Launch contribution"],
    visual: "mobile"
  },
  "UW-27": {
    headline: "The next round of mobile improvements.",
    role: "Mobile application developer",
    category: "Mobile",
    strengths: ["Application corrections", "Mobile maintenance", "Focused support"],
    visual: "mobile"
  },
  "UW-28": {
    headline: "Focused fixes for an existing mobile app.",
    role: "Mobile application developer",
    category: "Mobile",
    strengths: ["Mobile corrections", "Existing application", "Short engagement"],
    visual: "mobile"
  },
  "UW-29": {
    headline: "One engineering partner. Across the stack.",
    role: "Full-stack product engineer",
    category: "Full stack & cloud",
    strengths: ["React & Next.js", "MongoDB & AWS", "AI-assisted delivery"],
    visual: "cloud"
  }
};

export const getEngagementShowcase = (id: string): EngagementShowcase => {
  const entry = entries[id];
  if (!entry) throw new Error(`Missing engagement presentation: ${id}`);
  return {
    headline: entry.headline,
    role: entry.role,
    category: entry.category,
    strengths: [...entry.strengths],
    visual: entry.visual
  };
};
