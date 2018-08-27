// @flow
import * as React from 'react';
import {Divider} from 'antd';
import RefId from 'canner-ref-id';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {MockedProvider} from 'react-apollo/test-utils';
import BarChart  from 'packages/vega-chart-bar';
import ExamplePrimitiveValueWrapper from './ExamplePrimitiveValueHoc';

// types
import type {PrimitiveTypes} from './types';

@ExamplePrimitiveValueWrapper({
	data: [
    {category: 'A', amount: 28},
    {category: 'B', amount: 55},
    {category: 'C', amount: 43},
    {category: 'D', amount: 91},
    {category: 'E', amount: 81},
    {category: 'F', amount: 53},
    {category: 'G', amount: 19},
    {category: 'H', amount: 87}
  ],
  uiParams: {
    x: {
      field: 'category',
    },
    y: {
      field: 'amount'
    }
  }
})
class BarChartDemo1 extends React.Component<PrimitiveTypes<*>> {
  render() {
    const {
      value: {
        data,
        uiParams
      }
    } = this.props;
    return (
      <React.Fragment>
        <Divider>BarChart</Divider>
        <BarChart
          refId={new RefId('barChart')}
          value={data}
          uiParams={uiParams}
        />
      </React.Fragment>
    );
  }
}
const query = gql`query {posts{name age}}`;
class BarChartInApolloDemo extends React.Component<PrimitiveTypes<*>> {
  render() {
    return (
      <MockedProvider mocks={[{
        request: {
          query
        },
        result: {
          data: {
            posts: [{
              name: 'name1',
              age: 20
            }, {
              name: 'name2',
              age: 21
            }, {
              name: 'name3',
              age: 22
            }, {
              name: 'name4',
              age: 23
            }]
          }
        }
      }]} addTypename={false}>
        <Divider>BarChart</Divider>
        <Query query={query}>
          {({loading, error, data}) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;
            const key = Object.keys(data)[0];
            console.log(data);
            return (
              <BarChart
                refId={new RefId('barChart')}
                value={data[key]}
                uiParams={{
                  x: {
                    field: 'name'
                  },
                  y: {
                    field: 'age'
                  }
                }}
              />
            );
          }}
        </Query>
      </MockedProvider>
    );
  }
}

export default class Demo extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <BarChartDemo1/>
        <BarChartInApolloDemo/>
      </React.Fragment>
    )
  }
}
