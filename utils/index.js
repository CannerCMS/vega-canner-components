// @flow
type size = number | string;

export const percentStrToFloat = (percent: size) => {
  return parseFloat(percent) / 100.0;
}

const toResponse = (spec: any, name: string) => {
  if (!spec.signals) spec.signal = [];

  spec.signals.push({ 
    name,
    value: '',
    on: [ 
      { 
        events: 'window:load,window:resize,window:click',
        update: `containerSize()[${name === 'width' ? 0 : 1}] * ${percentStrToFloat(spec[name])}`
      } 
    ]
  });

  delete spec[name];
}

export const withResponsive = (createSpec: Function) => (
  (props: any) => {
    const spec: any = createSpec(props);
    if (typeof spec.width === 'string') toResponse(spec, 'width');
    if (typeof spec.height === 'string') toResponse(spec, 'height');
    console.warn(spec);
    return spec;
  }
);
