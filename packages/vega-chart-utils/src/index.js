// @flow
import * as React from "react";
import vegaTooltip from "vega-tooltip";

type size = number | string;

export const percentStrToFloat = (percent: size = "100%") => {
  return parseFloat(percent) / 100.0;
};

const toResponse = (spec: any, name: string) => {
  if (!spec.signals) spec.signal = [];

  spec.signals.push({
    name,
    value: "",
    on: [
      {
        events: "window:resize,window:click",
        update: `containerSize()[${
          name === "width" ? 0 : 1
        }] * ${percentStrToFloat(spec[name])}`
      }
    ]
  });

  delete spec[name];
};

export const withResponsive = (createSpec: Function) => (props: any) => {
  const spec: any = createSpec(props);
  if (typeof spec.width === "string") toResponse(spec, "width");
  if (typeof spec.height === "string") toResponse(spec, "height");
  return spec;
};

export const withAutoContainerSize = (
  WrappedComponent: React.ComponentType<any>
) => {
  return class extends React.Component<any> {
    // $FlowFixMe
    vegaRef: any = React.createRef();

    componentDidMount() {
      const { uiParams } = this.props;

      let width = "100%";
      let height = "100%";

      if (uiParams) {
        width = uiParams.width;
        height = uiParams.height;
      }

      if (this.vegaRef.view) {
        const view = this.vegaRef.view;
        const el = view.container();

        // Need a setTimeout to get the final loaded container size
        setTimeout(() => {
          if (!view.width())
            view.width(el.clientWidth * percentStrToFloat(width));
          if (!view.height())
            view.height(el.clientHeight * percentStrToFloat(height));
          view.run();
        }, 0);
      }
    }

    getVegaRef = (ref: any) => {
      this.vegaRef = ref;
      if (this.props.getVegaRef) this.props.getVegaRef(ref);
    };

    render() {
      // $FlowFixMe
      return <WrappedComponent {...this.props} getVegaRef={this.getVegaRef} />;
    }
  };
};

export const withTooltip = (
  WrappedComponent: React.ComponentType<{ getVegaRef: Function }>
) => {
  return class extends React.Component<any> {
    // $FlowFixMe
    vegaRef: any = React.createRef();

    componentDidMount() {
      if (this.vegaRef.view) {
        vegaTooltip(this.vegaRef.view);
      }
    }

    getVegaRef = (ref: any) => {
      this.vegaRef = ref;
      if (this.props.getVegaRef) this.props.getVegaRef(ref);
    };

    render() {
      // $FlowFixMe
      return <WrappedComponent {...this.props} getVegaRef={this.getVegaRef} />;
    }
  };
};
