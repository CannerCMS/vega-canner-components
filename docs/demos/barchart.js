// @flow
import * as React from 'react';
import {Divider} from 'antd';
import RefId from 'canner-ref-id';

import BarChart  from 'packages/vega-chart-bar';
import ExamplePrimitiveValueWrapper from './ExamplePrimitiveValueHoc';

// types
import type {PrimitiveTypes} from './types';

@ExamplePrimitiveValueWrapper({
	data: [
    {category: 'A', amount: 28},
    {category: 'B', amount: 55},
    {category: 'C', amount: 43},
    {category: 'D', amount: 91},
    {category: 'E', amount: 81},
    {category: 'F', amount: 53},
    {category: 'G', amount: 19},
    {category: 'H', amount: 87}
  ],
  uiParams: {
    width: '80%',
    x: {
      field: 'category',
      title: 'Category'
    },
    y: {
      field: 'amount',
      title: 'Amount'
    }
  }
})
class BarChartDemo1 extends React.Component<PrimitiveTypes<*>> {
  render() {
    const {
      value: {
        data,
        uiParams
      }
    } = this.props;
    return (
      <React.Fragment>
        <Divider>BarChart</Divider>
        <div style={{height: 400}}>
          <BarChart
            refId={new RefId('barChart')}
            value={data}
            uiParams={uiParams}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default class Demo extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <BarChartDemo1/>
      </React.Fragment>
    )
  }
}
