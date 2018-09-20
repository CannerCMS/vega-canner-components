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

const style = {height: 'inherit', width: 'inherit'};

class PieChart extends React.Component<Props> {
  // $FlowFixMe
  vega: any = React.createRef()

  componentDidMount() {
    if (this.vega.current.view) {
      vegaTooltip(this.vega.current.view);
    }
  }

  render() {
    const {
      uiParams,
      value,
    } = this.props;

    return (
      <Vega style={style} spec={createSpec(uiParams)} data={{table: value}} ref={this.vega} />
    );
  }
}

export default PieChart;
