// @flow
import React from "react";
import Vega from 'react-vega';
import vegaTooltip from 'vega-tooltip';

import createSpec from './createSpec';

// types
import type {ChartDefaultProps} from 'types/ChartDefaultProps';
import type {UIParams} from './types';

type Props = ChartDefaultProps & {
  uiParams: UIParams
};

class PieChart extends React.Component<Props> {
  // $FlowFixMe
  vega: any = React.createRef()

  componentDidMount() {
    vegaTooltip(this.vega.current.view);
  }

  render() {
    const {
      uiParams,
      value,
    } = this.props;

    return (
      <Vega spec={createSpec(uiParams)} data={{table: value}} ref={this.vega} />
    );
  }
}

export default PieChart;
