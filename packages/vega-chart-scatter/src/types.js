// @flow

export type UIParams = {
  x: {
    field: string,
    scale?: string,
    title?: string,
  },
  y: {
    field: string,
    scale?: string,
    title?: string,
  },
  text: {
    field: string,
  },
  width?: number | string,
  height?: number | string,
  fill?: string, // color
};