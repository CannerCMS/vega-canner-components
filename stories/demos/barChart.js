// @flow
import * as React from "react";
import RefId from "canner-ref-id";

import BarChart from "packages/vega-chart-bar";

// types
import type { ChartTypes } from "./types";
export default class BarChartDemo extends React.Component<ChartTypes<*>> {
  render() {
    const { data, uiParams } = this.props;
    return (
      <BarChart
        refId={new RefId("barChart")}
        value={data}
        uiParams={uiParams}
      />
    );
  }
}
