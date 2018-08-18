import React, {Component} from "react";
import ReactDOM from "react-dom";

import {Layout} from 'antd';

class Demo extends Component {
  render() {
    return (
      <Layout />
    );
  }
}

ReactDOM.render(
  <Demo/>,
  document.getElementById("root")
);