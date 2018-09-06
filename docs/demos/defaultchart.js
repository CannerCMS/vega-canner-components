// @flow
import * as React from 'react';
import {Divider} from 'antd';
import RefId from 'canner-ref-id';

import DefaultChart  from 'packages/vega-chart-default';
import ExamplePrimitiveValueWrapper from './ExamplePrimitiveValueHoc';

// types
import type {PrimitiveTypes} from './types';

@ExamplePrimitiveValueWrapper({
	data: {
    layer_indices: [0, 1, 2, 3],
    table: [
      {"x": 1,  "y": 28}, {"x": 2,  "y": 55},
      {"x": 3,  "y": 43}, {"x": 4,  "y": 91},
      {"x": 5,  "y": 81}, {"x": 6,  "y": 53},
      {"x": 7,  "y": 19}, {"x": 8,  "y": 87},
      {"x": 9,  "y": 52}, {"x": 10, "y": 48},
      {"x": 11, "y": 24}, {"x": 12, "y": 49},
      {"x": 13, "y": 87}, {"x": 14, "y": 66},
      {"x": 15, "y": 17}, {"x": 16, "y": 27},
      {"x": 17, "y": 68}, {"x": 18, "y": 16},
      {"x": 19, "y": 49}, {"x": 20, "y": 15}
    ]
  },
  uiParams: {
    spec: {
      "$schema": "https://vega.github.io/schema/vega/v4.json",
      "width": 500,
      "height": 300,
    
      "signals": [
        {
          "name": "layers",
          "value": 2,
          "on": [{"events": "mousedown!", "update": "1 + (layers % 4)"}],
          "bind": {"input": "select", "options": [1, 2, 3, 4]}
        },
        {
          "name": "height",
          "update": "floor(200 / layers)"
        },
        {
          "name": "vheight",
          "update": "height * layers"
        },
        {
          "name": "opacity",
          "update": "pow(layers, -2/3)"
        }
      ],
    
      "data": [
        {
          "name": "layer_indices",
          "transform": [
            {"type": "filter", "expr": "datum.data < layers"},
            {"type": "formula", "expr": "datum.data * -height", "as": "offset"}
          ]
        },
        {
          "name": "table"
        }
      ],
    
      "scales": [
        {
          "name": "x",
          "type": "linear",
          "range": "width",
          "zero": false, "round": true,
          "domain": {"data": "table", "field": "x"}
        },
        {
          "name": "y",
          "type": "linear",
          "range": [{"signal":"vheight"}, 0],
          "nice": true, "zero": true,
          "domain": {"data": "table", "field": "y"}
        }
      ],
    
      "axes": [
        {"orient": "bottom", "scale": "x", "tickCount": 20}
      ],
    
      "marks": [
        {
          "type": "group",
          "encode": {
            "update": {
              "width": {"field": {"group": "width"}},
              "height": {"field": {"group": "height"}},
              "clip": {"value": true}
            }
          },
          "marks": [
            {
              "type": "group",
              "from": {"data": "layer_indices"},
              "encode": {
                "update": {
                  "y": {"field": "offset"}
                }
              },
              "marks": [
                {
                  "type": "area",
                  "from": {"data": "table"},
                  "encode": {
                    "enter": {
                      "interpolate": {"value": "monotone"},
                      "x": {"scale": "x", "field": "x"},
                      "fill": {"value": "steelblue"}
                    },
                    "update": {
                      "y": {"scale": "y", "field": "y"},
                      "y2": {"scale": "y", "value": 0},
                      "fillOpacity": {"signal": "opacity"}
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
})
class DefaultChartDemo1 extends React.Component<PrimitiveTypes<*>> {
  render() {
    const {
      value: {
        data,
        uiParams
      }
    } = this.props;
    return (
      <React.Fragment>
        <Divider>DefaultCahrt</Divider>
        <DefaultChart
          refId={new RefId('defaultChart')}
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
        <DefaultChartDemo1/>
      </React.Fragment>
    )
  }
}
