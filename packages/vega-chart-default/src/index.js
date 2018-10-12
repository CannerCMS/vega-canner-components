// @flow
import React from "react";
import Vega from "react-vega";

// types
import type { ChartDefaultProps } from "types/ChartDefaultProps";
import type { UIParams } from "./types";

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

const VegaChart = ({ value, spec }: Props) => {
  return <Vega spec={spec} data={value} />;
};

export default VegaChart;
