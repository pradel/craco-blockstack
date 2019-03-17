# craco-blockstack

A [craco](https://github.com/sharegate/craco) plugin to use Blockstack with create-react-app.

## Install

Make sure you have [craco](https://github.com/sharegate/craco) installed before continuing.

`npm install --save craco-blockstack`

`yarn add --dev craco-blockstack`

## Usage

Simply enable the plugin in your `craco.config.js` file.

```javascript
// craco.config.js
const CracoBlockstackPlugin = require("craco-blockstack");

module.exports = {
  plugins: [{ plugin: CracoBlockstackPlugin }]
};
```
