// @flow

export type UIParams = {
  innerRadius?: number,
  sort?: boolean,
  width?: number,
  height?: number,
  field: string,
  color: {
    range?: string,
    field?: string
  },
  getValue?: Function
};