// @flow

export type UIParams = {
  interpolate?: "basis" | "cardinal" | "catmull-rom" | "linear" | "monotone" | "natural" | "step" | "step-after" | "step-before", // default linear
  x: {
    field: string,
    scale?: string // https://vega.github.io/vega/docs/scales/#types // default linear
  },
  y: {
    field: string,
    scale?: string // https://vega.github.io/vega/docs/scales/#types // default linear
  },
  width?: number,
  height?: number
};