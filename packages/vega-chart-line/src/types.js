// @flow

export type UIParams = {
  interpolate?: "basis" | "cardinal" | "catmull-rom" | "linear" | "monotone" | "natural" | "step" | "step-after" | "step-before", // default linear
  x: {
    field: string,
    scale?: string, // https://vega.github.io/vega/docs/scales/#types // default linear
    title?: string,
  },
  y: {
    field: string,
    scale?: string, // https://vega.github.io/vega/docs/scales/#types // default linear
    title?: string,
  },
  width?: number | string,
  height?: number | string,
  fill?: string, // color
};