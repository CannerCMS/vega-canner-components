// @flow
import React from "react";
import Vega from 'react-vega';

import {withTooltip} from '@canner/vega-charts-utils';
import createSpec from './createSpec';

// types
import type {ChartDefaultProps} from 'types/ChartDefaultProps';
import type {UIParams} from './types';

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

const style = {height: 'inherit', width: 'inherit'};

@withTooltip
class ScatterChart extends React.Component<Props> {
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

export default ScatterChart;
