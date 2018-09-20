// @flow

export type UIParams = {
  innerRadius?: number,
  sort?: boolean,
  width?: number | string,
  height?: number | string,
  field: string,
  color: {
    range?: string,
    field?: string
  },
};