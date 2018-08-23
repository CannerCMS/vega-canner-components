// @flow
import * as React from 'react';
import Inspector from 'react-inspector';

type PrimitiveValue = string | boolean | number | Object | Array<any>;

export default (defaultValue: PrimitiveValue, rootValue: PrimitiveValue) => (ConfigOrComposedComponent: React.Element<*>) => {
  class ExamplePrimitiveValueWrapper extends ConfigOrComposedComponent {
    constructor(props: any) {
      super(props);

      this.state = {
        log: [],
        value: defaultValue,
        rootValue: defaultValue || rootValue
      };
    }
  
    render() {
      const {log, value} = this.state;

      return (
        <div>
          <ConfigOrComposedComponent
            {...this.props}
            value={value}
            />
          {log.length ?
          <div>
            <h4>onChange log:</h4>
            <div style={{border: '1px solid #CCC', padding: '10px'}}>
              {log.map((item, i) => {
                return (
                  <Inspector data={item} key={i}/>
                );
              })}
            </div>
          </div> : null}
        </div>
      );
    }
  }

  return ExamplePrimitiveValueWrapper;
};