import {UIParams} from './types';

const createSpec = ({
  fill = '#1890ff',
  interpolate = 'linear',
  width = 500,
  height = 400,
  x,
  y,
}: UIParams) =>({
    $schema: 'https://vega.github.io/schema/vega/v4.json',
    width: width,
    height: height,
    padding: 5,
  
    signals: [
      {
        name: 'interpolate',
        value: interpolate
      }
    ],
  
    data: [
      {
        name: 'table'
      }
    ],
  
    scales: [
      {
        name: 'xscale',
        type: x.scale || 'linear',
        range: 'width',
        zero: false,
        domain: {'data': 'table', 'field': x.field}
      },
      {
        name: 'yscale',
        type: y.scale || 'linear',
        range: 'height',
        nice: true,
        zero: true,
        domain: {'data': 'table', 'field': y.field}
      }
    ],
  
    axes: [
      {orient: 'bottom', scale: 'xscale', tickCount: 20, title: x.title || ''},
      {orient: 'left', scale: 'yscale', title: y.title || ''}
    ],
  
    marks: [
      {
        type: 'line',
        from: {data: 'table'},
        encode: {
          enter: {
            x: {scale: 'xscale', field: x.field},
            y: {scale: 'yscale', field: y.field},
            y2: {scale: 'yscale', value: 0},
            interpolate: {signal: 'interpolate'},
            stroke: {value: fill},
          },
        }
      }
    ]
});

export default createSpec;
