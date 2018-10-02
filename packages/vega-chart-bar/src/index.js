// @flow
import React from "react";
import Vega from 'react-vega';

import {withAutoContainerSize} from '@canner/vega-charts-utils';
import createSpec from './createSpec';

// types
import type {ChartDefaultProps} from 'types/ChartDefaultProps';
import type {UIParams} from './types';

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

const style = {height: 'inherit', width: 'inherit'};

@withAutoContainerSize
class BarChart extends React.Component<Props> {
  render() {
    const {
      getVegaRef,
      uiParams,
      value,
    } = this.props;
    return (
      <Vega ref={getVegaRef} style={style} spec={createSpec(uiParams)} data={{table: value}} />
    );
  }
}

export default BarChart;
