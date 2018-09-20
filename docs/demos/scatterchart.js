// @flow
import * as React from 'react';
import {Divider} from 'antd';
import RefId from 'canner-ref-id';

import ScatterChart  from 'packages/vega-chart-scatter';
import ExamplePrimitiveValueWrapper from './ExamplePrimitiveValueHoc';

// types
import type {PrimitiveTypes} from './types';

@ExamplePrimitiveValueWrapper({
	data: [
    {"u": 1,  "v": 28}, {"u": 2,  "v": 55},
    {"u": 3,  "v": 43}, {"u": 4,  "v": 91},
    {"u": 5,  "v": 81}, {"u": 6,  "v": 53},
    {"u": 7,  "v": 19}, {"u": 8,  "v": 87},
    {"u": 9,  "v": 52}, {"u": 10, "v": 48},
    {"u": 11, "v": 24}, {"u": 12, "v": 49},
    {"u": 13, "v": 87}, {"u": 14, "v": 66},
    {"u": 15, "v": 17}, {"u": 16, "v": 27},
    {"u": 17, "v": 68}, {"u": 18, "v": 16},
    {"u": 19, "v": 49}, {"u": 20, "v": 15}
  ],
  uiParams: {
    height: 400,
    x: {
      field: 'u',
      title: 'X title'
    },
    y: {
      field: 'v',
      title: 'Y title'
    },
    text: {
      field: 'u'
    }
  }
})
class ScatterChartDemo1 extends React.Component<PrimitiveTypes<*>> {
  render() {
    const {
      value: {
        data,
        uiParams
      }
    } = this.props;
    return (
      <React.Fragment>
        <Divider>ScatterChart</Divider>
        <ScatterChart
          refId={new RefId("scatterChart")}
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
        <ScatterChartDemo1/>
      </React.Fragment>
    )
  }
}
