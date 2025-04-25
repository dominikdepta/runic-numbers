import type { SvgLineConditionParams } from "./types";

export const svgLines = [
  {
    props: {
      x1: "47.4142",
      y1: "89.5858",
      x2: "89.8406",
      y2: "132.012",
    },
    condition: ({ hundreds }: SvgLineConditionParams) =>
      [400, 500].includes(hundreds),
  },
  {
    props: {
      x1: "48.5858",
      y1: "132.012",
      x2: "91.0122",
      y2: "89.5858",
    },
    condition: ({ hundreds }: SvgLineConditionParams) =>
      [300].includes(hundreds),
  },
  {
    props: {
      x1: "4.58579",
      y1: "131.586",
      x2: "47.0122",
      y2: "89.1594",
    },
    condition: ({ thousands }: SvgLineConditionParams) =>
      [4000, 5000].includes(thousands),
  },
  {
    props: {
      x1: "2.41421",
      y1: "89.1594",
      x2: "44.8406",
      y2: "131.586",
    },
    condition: ({ thousands }: SvgLineConditionParams) =>
      [3000].includes(thousands),
  },
  {
    props: {
      x1: "48.5858",
      y1: "44.5858",
      x2: "91.0122",
      y2: "2.15938",
    },
    condition: ({ ones }: SvgLineConditionParams) => [4, 5].includes(ones),
  },
  {
    props: {
      x1: "48.4142",
      y1: "2.15938",
      x2: "90.8406",
      y2: "44.5858",
    },
    condition: ({ ones }: SvgLineConditionParams) => [3].includes(ones),
  },
  {
    props: {
      x1: "3.23401",
      y1: "2.58579",
      x2: "45.6604",
      y2: "45.0122",
    },
    condition: ({ tens }: SvgLineConditionParams) => [40, 50].includes(tens),
  },
  {
    props: {
      x1: "3.40559",
      y1: "45.0122",
      x2: "45.832",
      y2: "2.58579",
    },
    condition: ({ tens }: SvgLineConditionParams) => [30].includes(tens),
  },
  {
    props: {
      x1: "48",
      y1: "133",
      x2: "93",
      y2: "133",
    },
    condition: ({ hundreds }: SvgLineConditionParams) =>
      [100, 500, 700, 900].includes(hundreds),
  },
  {
    props: {
      x1: "0",
      y1: "133",
      x2: "45",
      y2: "133",
    },
    condition: ({ thousands }: SvgLineConditionParams) =>
      [1000, 5000, 7000, 9000].includes(thousands),
  },
  {
    props: {
      x1: "48",
      y1: "89",
      x2: "93",
      y2: "89",
    },
    condition: ({ hundreds }: SvgLineConditionParams) =>
      [200, 800, 900].includes(hundreds),
  },
  {
    props: {
      x1: "0",
      y1: "89",
      x2: "45",
      y2: "89",
    },
    condition: ({ thousands }: SvgLineConditionParams) =>
      [2000, 8000, 9000].includes(thousands),
  },
  {
    props: {
      x1: "48",
      y1: "46",
      x2: "93",
      y2: "46",
    },
    condition: ({ ones }: SvgLineConditionParams) => [2, 8, 9].includes(ones),
  },
  {
    props: {
      x1: "0",
      y1: "46",
      x2: "45",
      y2: "46",
    },
    condition: ({ tens }: SvgLineConditionParams) =>
      [20, 80, 90].includes(tens),
  },
  {
    props: {
      x1: "48",
      y1: "2",
      x2: "93",
      y2: "2",
    },
    condition: ({ ones }: SvgLineConditionParams) =>
      [1, 5, 7, 9].includes(ones),
  },
  {
    props: {
      x1: "0",
      y1: "2",
      x2: "45",
      y2: "2",
    },
    condition: ({ tens }: SvgLineConditionParams) =>
      [10, 50, 70, 90].includes(tens),
  },
  {
    props: {
      x1: "91",
      y1: "90",
      x2: "91",
      y2: "135",
    },
    condition: ({ hundreds }: SvgLineConditionParams) =>
      [600, 700, 800, 900].includes(hundreds),
  },
  {
    props: {
      x1: "91",
      y1: "8.74228e-08",
      x2: "91",
      y2: "45",
    },
    condition: ({ ones }: SvgLineConditionParams) =>
      [6, 7, 8, 9].includes(ones),
  },
  {
    props: {
      x1: "2",
      y1: "89",
      x2: "2",
      y2: "134",
    },
    condition: ({ thousands }: SvgLineConditionParams) =>
      [6000, 7000, 8000, 9000].includes(thousands),
  },
  {
    props: {
      x1: "2",
      y1: "2",
      x2: "2",
      y2: "47",
    },
    condition: ({ tens }: SvgLineConditionParams) =>
      [60, 70, 80, 90].includes(tens),
  },
  {
    props: {
      x1: "47",
      y1: "90",
      x2: "47",
      y2: "135",
    },
    condition: () => true,
  },
  {
    props: {
      x1: "47",
      y1: "45",
      x2: "47",
      y2: "90",
    },
    condition: () => true,
  },
  {
    props: {
      x1: "47",
      y1: "8.74228e-08",
      x2: "47",
      y2: "45",
    },
    condition: () => true,
  },
] as const;
