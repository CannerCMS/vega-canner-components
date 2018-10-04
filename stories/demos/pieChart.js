// @flow
import * as React from "react";
import RefId from "canner-ref-id";

import PieChart from "packages/vega-chart-pie";

// types
import type { ChartTypes } from "./types";

export default class PieChartDemo extends React.Component<ChartTypes<*>> {
  render() {
    const { data, uiParams } = this.props;
    return (
      <PieChart
        refId={new RefId("pieChart")}
        value={data}
        uiParams={uiParams}
      />
    );
  }
}
