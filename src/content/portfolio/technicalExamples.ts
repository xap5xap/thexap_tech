// Availability checkpoints for illustrative explanations, never evidence of project use.
export const technicalExamples = {
  redux: {
    name: "Redux",
    availableBy: "2015-12-31",
    source: "https://redux.js.org/understanding/history-and-design/history-of-redux"
  },
  "material-ui": {
    name: "Material UI",
    availableBy: "2014-12-31",
    source: "https://mui.com/blog/material-ui-is-now-mui/"
  },
  tailwind: {
    name: "Tailwind CSS",
    availableBy: "2020-08-18",
    source: "https://tailwindcss.com/blog/tailwindcss-1-7"
  },
  zustand: {
    name: "Zustand",
    availableBy: "2020-08-17",
    source: "https://registry.npmjs.org/zustand"
  },
  supabase: {
    name: "Supabase",
    availableBy: "2020-08-05",
    source: "https://supabase.com/blog/supabase-alpha-july-2020"
  }
} as const;

export type TechnicalExampleId = keyof typeof technicalExamples;
