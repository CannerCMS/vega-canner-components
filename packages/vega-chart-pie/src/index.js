// @flow
import React from "react";
import Vega from 'react-vega';

import createSpec from './createSpec';
import {withTooltip} from '../../../utils';

// types
import type {ChartDefaultProps} from 'types/ChartDefaultProps';
import type {UIParams} from './types';

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

const style = {height: 'inherit', width: 'inherit'};

@withTooltip
class PieChart extends React.Component<Props> {
  render() {
    const {
      vegaRef,
      uiParams,
      value,
    } = this.props;
    return (
      <Vega ref={vegaRef} style={style} spec={createSpec(uiParams)} data={{table: value}} />
    );
  }
}

export default PieChart;
