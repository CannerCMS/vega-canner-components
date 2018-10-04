# vega-canner-components

This repository provide chart components for developers to assemble CMS interface using Canner CMS.

> This project use **Lerna** to maintain multiple packages.

## Introduction

Learn how to use these default UI in Canner

https://www.canner.io/docs/advance-component-types.html

## Demo

https://canner.github.io/vega-canner-components/?selectedKind=Basic%20Charts&selectedStory=Line%20Chart&full=0&addons=1&stories=1&panelRight=0

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
