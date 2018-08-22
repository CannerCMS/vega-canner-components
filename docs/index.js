import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Context} from 'canner-helpers';
import {Layout, Menu} from 'antd';

import contextValue from './context';
import LineChartDemo from './demos/linechart';

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
            <Menu.Item key="line-chart">line Chart</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Context.Provider value={contextValue()}>
            {selectKey === 'line-chart' ? <LineChartDemo/> : null}
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