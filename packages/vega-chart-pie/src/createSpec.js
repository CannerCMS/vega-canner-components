import {withResponsive} from '../../../utils';
import {UIParams} from './types';

const createSpec = ({
  innerRadius = 0,
  sort = false,
  width = '100%',
  height = '100%',
  color = {},
  field
}: UIParams) =>({
  $schema: 'https://vega.github.io/schema/vega/v4.json',
  width: width,
  height: height,

  signals: [
    {
      name: 'startAngle', value: 0 
    },
    {
      name: 'endAngle', value: 6.29
    },
    {
      name: 'padAngle', value: 0
    },
    {
      name: 'innerRadius', value: innerRadius
    },
    {
      name: 'cornerRadius', value: 0
    },
    {
      name: 'sort', value: sort
    },
  ],

  data: [
    {
      name: 'table',
      transform: [
        {
          type: 'pie',
          field: field,
          startAngle: {signal: 'startAngle'},
          endAngle: {signal: 'endAngle'},
          sort: {signal: 'sort'}
        }
      ]
    },
  ],

  scales: [
    {
      name: 'color',
      type: 'ordinal',
      range: {scheme: color.range || 'set3'}
    },
  ],

  'legends': [{
    fill: 'color',  
    orient: 'right',
  }],

  marks: [
    {
      type: 'arc',
      from: {data: 'table'},
      encode: {
        enter: {
          fill: {scale: 'color', field: color.field || 'id'},
        },
        update: {
          x: {signal: 'width / 2'},
          y: {signal: 'height / 2'},
          tooltip: {"signal": `datum.${field}`},
          startAngle: {field: 'startAngle'},
          endAngle: {field: 'endAngle'},
          padAngle: {signal: 'padAngle'},
          innerRadius: {signal: 'innerRadius'},
          outerRadius: {signal: 'width / 2'},
          cornerRadius: {signal: 'cornerRadius'}
        }
      }
    }
  ]
});

export default withResponsive(createSpec);
