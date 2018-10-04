import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

// import { Button } from "@storybook/react/demo";
import LineChart from "./demos/lineChart";
import BarChart from "./demos/barChart";
import PieChart from "./demos/pieChart";
import ScatterChart from "./demos/scatterChart";
import CustomizeChart from "./demos/customizeChart";

import { Context } from "canner-helpers";
import contextValue from "./context";

const CannerHelperContext = storyFn => (
  <Context.Provider value={contextValue()}>{storyFn()}</Context.Provider>
);

storiesOf("Basic Charts", module)
  .addDecorator(CannerHelperContext)
  .add("Line Chart", () => (
    <LineChart
      data={[
        { u: 1, v: 28 },
        { u: 2, v: 55 },
        { u: 3, v: 43 },
        { u: 4, v: 91 },
        { u: 5, v: 81 },
        { u: 6, v: 53 },
        { u: 7, v: 19 },
        { u: 8, v: 87 },
        { u: 9, v: 52 },
        { u: 10, v: 48 },
        { u: 11, v: 24 },
        { u: 12, v: 49 },
        { u: 13, v: 87 },
        { u: 14, v: 66 },
        { u: 15, v: 17 },
        { u: 16, v: 27 },
        { u: 17, v: 68 },
        { u: 18, v: 16 },
        { u: 19, v: 49 },
        { u: 20, v: 15 }
      ]}
      uiParams={{
        x: {
          field: "u",
          title: "X axis"
        },
        y: {
          field: "v",
          title: "Y axis"
        },
        height: 400,
        width: 600
      }}
    />
  ))
  .add("Bar Chart", () => (
    <BarChart
      data={[
        { category: "A", amount: 28 },
        { category: "B", amount: 55 },
        { category: "C", amount: 43 },
        { category: "D", amount: 91 },
        { category: "E", amount: 81 },
        { category: "F", amount: 53 },
        { category: "G", amount: 19 },
        { category: "H", amount: 87 }
      ]}
      uiParams={{
        height: 400,
        width: 600,
        x: {
          field: "category",
          title: "Category"
        },
        y: {
          field: "amount",
          title: "Amount"
        }
      }}
    />
  ))
  .add("Pie Chart", () => (
    <PieChart
      data={[
        { id: 1, field: 4 },
        { id: 2, field: 6 },
        { id: 3, field: 10 },
        { id: 4, field: 3 },
        { id: 5, field: 7 },
        { id: 6, field: 8 }
      ]}
      uiParams={{
        field: "field",
        height: 400,
        width: 400
      }}
    />
  ))
  .add("Scatter Chart", () => (
    <ScatterChart
      data={[
        { u: 1, v: 28 },
        { u: 2, v: 55 },
        { u: 3, v: 43 },
        { u: 4, v: 91 },
        { u: 5, v: 81 },
        { u: 6, v: 53 },
        { u: 7, v: 19 },
        { u: 8, v: 87 },
        { u: 9, v: 52 },
        { u: 10, v: 48 },
        { u: 11, v: 24 },
        { u: 12, v: 49 },
        { u: 13, v: 87 },
        { u: 14, v: 66 },
        { u: 15, v: 17 },
        { u: 16, v: 27 },
        { u: 17, v: 68 },
        { u: 18, v: 16 },
        { u: 19, v: 49 },
        { u: 20, v: 15 }
      ]}
      uiParams={{
        height: 400,
        x: {
          field: "u",
          title: "X title"
        },
        y: {
          field: "v",
          title: "Y title"
        },
        text: {
          field: "u"
        }
      }}
    />
  ))
  .add("Customize Chart", () => <CustomizeChart />);
