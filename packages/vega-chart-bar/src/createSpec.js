import {withResponsive} from '@canner/vega-charts-utils';
import {UIParams} from './types';

const createSpec = ({
  fill = '#1890ff',
  width = '100%',
  height = '100%',
  x,
  y,
}: UIParams) =>({
  $schema: 'https://vega.github.io/schema/vega/v4.json',
  width: width,
  height: height,

  autosize: {
    type: 'fit',
  },

  data: [
    {
      name: 'table',
    }
  ],

  signals: [
    {
      name: 'tooltip',
      value: {},
      on: [
        {events: 'rect:mouseover', update: 'datum'},
        {events: 'rect:mouseout',  update: '{}'}
      ]
    },
  ],

  scales: [
    {
      name: 'xscale',
      type: x.scale || 'band',
      domain: {data: 'table', field: x.field},
      range: 'width',
      padding: 0.05,
      round: true
    },
    {
      name: 'yscale',
      type: y.scale || 'linear',
      domain: {data: 'table', field: y.field},
      nice: true,
      range: 'height'
    },
  ],

  axes: [
    { orient: 'bottom', scale: 'xscale', title: x.title || '' },
    { orient: 'left', scale: 'yscale', title: y.title || '', tickCount: {signal: 'height / 25'} }
  ],

  marks: [
    {
      type: 'rect',
      from: {data:'table'},
      encode: {
        enter: {
        },
        update: {
          x: {scale: 'xscale', field: x.field},
          width: {scale: 'xscale', band: 1},
          y: {scale: 'yscale', field: y.field},
          y2: {scale: 'yscale', value: 0},
          fill: {value: fill},
          fillOpacity: [{value: 1}]
        },
        hover: {
          fillOpacity: [{value: 0.8}]
        }
      }
    },
    {
      type: 'text',
      encode: {
        enter: {
          fill: {value: '#333'},
          align: {value: 'center'},
          baseline: {value: 'bottom'},
          fillOpacity: [
            {test: 'datum === tooltip', value: 0},
            {value: 1}
          ]
        },
        update: {
          x: {scale: 'xscale', signal: `tooltip.${x.field}`, band: 0.5},
          y: {scale: 'yscale', signal: `tooltip.${y.field}`, offset: -2},
          text: {signal: `tooltip.${y.field}`},
        }
      }
    }
  ]
}
);

export default withResponsive(createSpec);
