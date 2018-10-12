// @flow
import React from "react";
import Vega from "react-vega";

import merge from "lodash.merge";
import { withTooltip, withAutoContainerSize } from "@canner/vega-charts-utils";
import createSpec from "./createSpec";

// types
import type { ChartDefaultProps } from "types/ChartDefaultProps";
import type { UIParams } from "./types";

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

const style = { height: "inherit", width: "inherit" };

@withAutoContainerSize
@withTooltip
class ScatterChart extends React.Component<Props> {
  render() {
    const { getVegaRef, uiParams, value, spec } = this.props;
    return (
      <Vega
        ref={getVegaRef}
        style={style}
        spec={merge(createSpec(uiParams), spec)}
        data={{ table: value }}
      />
    );
  }
}

export default ScatterChart;
