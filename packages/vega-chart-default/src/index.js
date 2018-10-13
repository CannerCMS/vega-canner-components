// @flow
import React from "react";
import Vega from "react-vega";

// types
import type { ChartDefaultProps } from "types/ChartDefaultProps";
import { withAutoContainerSize } from "@canner/vega-charts-utils";
import type { UIParams } from "./types";

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

const VegaChart = ({ value, spec, getVegaRef }: Props) => {
  return <Vega ref={getVegaRef} spec={spec} data={value} />;
};

export default withAutoContainerSize(VegaChart);
