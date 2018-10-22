# vega-canner-components [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://canner.github.io/victory-canner-components/)

This repository provide chart components for developers to assemble CMS interface using [Canner CMS](https://www.canner.io/).

## Usage in [Canner](https://www.canner.io)

You have to use `<component/>` tag to use charts in Canner. [Learn more](https://www.canner.io/docs/schema-page-tags#lt-component-gt)

```jsx
<component
  packageName="@canner/vega-chart-scatter"
  graphql="<your graphql schema>"
  {...custom props}
  />
```

**Chart example**

```jsx
<component
  ui="@canner/vega-chart-bar"
  keyName="user-bar"
  graphql={`
      query users {
        users(first: 10) {name age}
      }
    `}
  uiParams={{
    height: 150,
    width: 200,
    color: {
      field: "name"
    },
    x: {
      field: "name"
    },
    y: {
      field: "age"
    }
  }}
/>
```

## Demo

https://canner.github.io/vega-canner-components/?selectedKind=Basic%20Charts&selectedStory=Line%20Chart&full=0&addons=1&stories=1&panelRight=0

## Common Props

All charts support common props as below

- `keyName`: A unique key.
- `ui`: Chart type. `line`, `bar`, `pie` or `scatter`
- `transformData`: Get the value from fetched data, this could allow you to transform your data.
- `spec`: Overwrite the default `specs` in charts. Learn more from [Vega Specification](https://vega.github.io/vega/docs/specification/).
- `graphql`: The graphql string to fetch the data
- `uiParams`: For more detailed UI settings

Other than common props, every charts have additional settings for each chart, and is listed in each section below.

## Line chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvega-chart-line.svg)](https://www.npmjs.com/package/@canner/vega-chart-line)

```
npm i --save @canner/vega-chart-line
```

**_uiParams:_**

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>interpolate</td>
    <td><code>string // default linear</code></td>
    <td>"basis" | "cardinal" | "catmull-rom" | "linear" | "monotone" | "natural" | "step" | "step-after" | "step-before"</td>
  </tr>
  <tr>
    <td>x</td>
    <td>
<pre><code>{
  field: string,
  scale?: string, // default linear
  title?: string
}</code></pre></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>y</td>
    <td><pre><code>{
  field: string,
  scale?: string, // default linear
  title?: string
}</code></pre></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>width</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>height</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>fill</td>
    <td><code>string // default #1890ff</code></td>
    <td>color</td>
  </tr>
</table>

## Bar chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvega-chart-bar.svg)](https://www.npmjs.com/package/@canner/vega-chart-bar)

```
npm i --save @canner/vega-chart-bar
```

**_uiParams:_**

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>x</td>
    <td><pre><code>{
  field: string,
  scale?: string, // default linear
  title?: string
}</code></pre></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>y</td>
    <td><pre><code>{
  field: string,
  scale?: string, // default linear
  title?: string
}</code></pre></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>width</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>height</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>fill</td>
    <td><code>string // default #1890ff</code></td>
    <td>color</td>
  </tr>
</table>

## Pie chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvega-chart-pie.svg)](https://www.npmjs.com/package/@canner/vega-chart-pie)

```
npm i --save @canner/vega-chart-pie
```

**_uiParams:_**

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>field</td>
    <td><code>string</code></td>
    <td></td>
  </tr>
  <tr>
    <td>width</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>height</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>color</td>
    <td>
<pre><code>{
  range?: string, // default category20
  field?: string // default id
}</code></pre></td>
    <td><a href="https://vega.github.io/vega/docs/scales/#range">range</a></td>
  </tr>
   <tr>
    <td>sort</td>
    <td><code>boolean // default false</code></td>
    <td>optional</td>
  </tr>
</table>

## Scatter chart [![npm-image](https://badge.fury.io/js/%40canner%2Fvega-chart-scatter.svg)](https://www.npmjs.com/package/@canner/vega-chart-scatter)

```
npm i --save @canner/vega-chart-scatter
```

**_uiParams:_**

<table>
  <tr>
    <th>Name</th>
    <th>Types</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>x</td>
    <td><pre><code>{
  field: string,
  scale?: string, // default linear
  title?: string
}</code></pre></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>y</td>
    <td><pre><code>{
  field: string,
  scale?: string, // default linear
  title?: string
}</code></pre></td>
    <td><a href="https://vega.github.io/vega/docs/scales">scale</a></td>
  </tr>
  <tr>
    <td>width</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>height</td>
    <td><code>number | string // default 100%</code></td>
    <td>number or percent string</td>
  </tr>
  <tr>
    <td>text</td>
    <td><code>{
      field: string
    }</code></td>
    <td>The text of field will be shown once the hover event is fired</td>
  </tr>
  <tr>
    <td>fill</td>
    <td><code>string // default #1890ff</code></td>
    <td>color</td>
  </tr>
</table>

## Develop

```
# install lerna in npm
$ npm i -g lerna

$ lerna bootstrap
$ npm run build
# or watch for rebuilding
$ npm run build:watch

# run demo
$ npm run storybook
```

## Test

```
$ lerna run test
```

## Deploy

```
$ npm run deploy-storybook
```
