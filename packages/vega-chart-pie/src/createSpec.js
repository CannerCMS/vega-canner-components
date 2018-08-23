import {UIParams} from './types';

const createSpec = ({
  innerRadius = 0,
  sort = false,
  width = 250,
  height = width,
  color = {},
  field
}: UIParams) =>({
  $schema: 'https://vega.github.io/schema/vega/v4.json',
  width: width,
  height: height,
  autosize: 'none',

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
    }
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
    }
  ],

  scales: [
    {
      name: 'color',
      type: 'ordinal',
      range: {scheme: color.range || 'category20'}
    }
  ],

  marks: [
    {
      type: 'arc',
      from: {data: 'table'},
      encode: {
        enter: {
          fill: {scale: 'color', field: color.field || 'id'},
          x: {signal: 'width / 2'},
          y: {signal: 'height / 2'}
        },
        update: {
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

export default createSpec;
