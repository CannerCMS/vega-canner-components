import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Context} from 'canner-helpers';
import {Layout, Menu} from 'antd';

import contextValue from './context';

import LineChartDemo from './demos/linechart';
import BarChartDemo from './demos/barchart';
import PieChartDemo from './demos/piechart';
import ScatterChartDemo from './demos/scatterchart';

const {Content, Sider} = Layout;

class Demo extends Component {
  state = {
    selectKey: 'line-chart',
  };

  switchDemo = (item) => {
    this.setState({
      selectKey: item.keyPath[0],
    })
  }

  render() {
    const {selectKey} = this.state;
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[selectKey]}
            onClick={this.switchDemo}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="line-chart">Line Chart</Menu.Item>
            <Menu.Item key="bar-chart">Bar Chart</Menu.Item>
            <Menu.Item key="pie-chart">Pie Chart</Menu.Item>
            <Menu.Item key="scatter-chart">Scatter Chart</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Context.Provider value={contextValue()}>
            {selectKey === 'line-chart' ? <LineChartDemo/> : null}
            {selectKey === 'bar-chart' ? <BarChartDemo/> : null}
            {selectKey === 'pie-chart' ? <PieChartDemo/> : null}
            {selectKey === 'scatter-chart' ? <ScatterChartDemo/> : null}
            </Context.Provider>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(
  <Demo/>,
  document.getElementById("root")
);