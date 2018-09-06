// @flow
import React from "react";
import Vega from 'react-vega';

import createSpec from './createSpec';

// types
import type {ChartDefaultProps} from 'types/ChartDefaultProps';
import type {UIParams} from './types';

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

const LineChart = ({ value, uiParams }: Props) => ((
  <Vega spec={createSpec(uiParams)} data={{table: uiParams.getValue ? uiParams.getValue(value) : value}} />
));

export default LineChart;
