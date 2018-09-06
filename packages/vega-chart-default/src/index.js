// @flow
import React from "react";
import Vega from 'react-vega';

// types
import type {ChartDefaultProps} from 'types/ChartDefaultProps';
import type {UIParams} from './types';

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

const VegaChart = ({ value, uiParams }: Props) => {
  return (
    <Vega spec={uiParams.spec} data={uiParams.getValue ? uiParams.getValue(value) : value} />
  )
};

export default VegaChart;
