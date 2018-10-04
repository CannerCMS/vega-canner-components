// @flow
import * as React from "react";
import RefId from "canner-ref-id";

import ScatterChart from "packages/vega-chart-scatter";

// types
import type { ChartTypes } from "./types";

export default class ScatterChartDemo extends React.Component<ChartTypes<*>> {
  render() {
    const { data, uiParams } = this.props;
    return (
      <ScatterChart
        refId={new RefId("scatterChart")}
        value={data}
        uiParams={uiParams}
      />
    );
  }
}
