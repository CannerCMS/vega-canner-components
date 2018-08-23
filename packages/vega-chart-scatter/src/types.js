// @flow

export type UIParams = {
  x: {
    field: string,
    scale?: string
  },
  y: {
    field: string,
    scale?: string
  },
  text: {
    field: string,
  },
  width?: number,
  height?: number,
  fill?: string, // color
};