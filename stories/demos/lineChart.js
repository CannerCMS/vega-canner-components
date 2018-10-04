// @flow
import * as React from "react";
import RefId from "canner-ref-id";

import LineChart from "packages/vega-chart-line";

// types
import type { ChartTypes } from "./types";
export default class LineChartDemo extends React.Component<ChartTypes<*>> {
  render() {
    const { data, uiParams } = this.props;
    return (
      <LineChart
        refId={new RefId("lineChart")}
        value={data}
        uiParams={uiParams}
      />
    );
  }
}
