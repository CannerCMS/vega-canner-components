// @flow
import * as React from 'react';
import {Divider} from 'antd';
import RefId from 'canner-ref-id';

import PieChart  from 'packages/vega-chart-pie';
import ExamplePrimitiveValueWrapper from './ExamplePrimitiveValueHoc';

// types
import type {PrimitiveTypes} from './types';

@ExamplePrimitiveValueWrapper({
	data: [
    {"id": 1, "field": 4},
    {"id": 2, "field": 6},
    {"id": 3, "field": 10},
    {"id": 4, "field": 3},
    {"id": 5, "field": 7},
    {"id": 6, "field": 8}
  ],
  uiParams: {
    field: 'field',
    height: 400,
    width: 400
  }
})
class PieChartDemo1 extends React.Component<PrimitiveTypes<*>> {
  render() {
    const {
      value: {
        data,
        uiParams
      }
    } = this.props;
    return (
      <React.Fragment>
        <Divider>PieChart</Divider>
        <PieChart
          refId={new RefId("pieChart")}
          value={data}
          uiParams={uiParams}
        />
      </React.Fragment>
    );
  }
}

export default class Demo extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <PieChartDemo1/>
      </React.Fragment>
    )
  }
}
