import {withResponsive} from '@canner/vega-charts-utils';
import {UIParams} from './types';

const createSpec = ({
  width = '100%',
  height = '100%',
  fill = '#1890ff',
  text,
  x,
  y
}: UIParams) =>({
  $schema: 'https://vega.github.io/schema/vega/v4.json',
  width: width,
  height: height,
  padding: 5,
  autosize: {
    type: 'fit',
    resize: true
  },

  signals: [
    { name: 'yField',  value: x.field },
    { name: 'xField',  value: y.field },
    { name: 'nullGap',  value: 0 }
  ],

  data: [
    {
      name: 'table'
    }
  ],

  scales: [
    {
      name: 'yscale',
      type:  y.scale || 'linear',
      range: [{signal: 'height - nullGap'}, 0],
      nice: true,
      domain: {data: 'table',  field: {signal: 'yField'}}
    },
    {
      name: 'xscale',
      type: x.scale || 'linear',
      range: [{signal: 'nullGap'}, {signal: 'width'}],
      nice: true,
      domain: {data: 'table',  field: {signal: 'xField'}}
    }
  ],

  axes: [
    {
      orient: 'bottom',  scale: 'xscale',  offset: 5,  format: 's',
      title: x.title || '',
      tickCount: {signal: 'width / 70'}
    },
    {
      orient: 'left',  scale: 'yscale',  offset: 5,  format: 's',
      title: y.title || ''
    }
  ],

  marks: [
    {
      type: 'symbol',
      from: {data: 'table'},
      encode: {
        enter: {
          size: {value: 50},
        },
        update: {
          x: {scale: 'xscale',  field: {signal: 'xField'}},
          y: {scale: 'yscale',  field: {signal: 'yField'}},
          fill: {value: fill},
          fillOpacity: {value: 0.5},
          zindex: {value: 0},
          tooltip: {"signal": `datum.${text.field}`}
        },
        hover: {
          fill: {value: fill},
          size: 300,
          fillOpacity: {value: 1},
          zindex: {value: 1}
        }
      }
    }
  ]
});

export default withResponsive(createSpec);
