# preact-cli-unassert

Plugin for [⚛️ preact-cli](https://github.com/developit/preact-cli) to remove assertions in production.

[![npm](https://img.shields.io/npm/v/preact-cli-unassert.svg?style=flat-square)](https://www.npmjs.com/package/preact-cli-unassert)
[![David](https://img.shields.io/david/logicoder/preact-cli-unassert.svg?style=flat-square)](https://github.com/logicoder/preact-cli-unassert/blob/master/package.json)
[![license](https://img.shields.io/github/license/logicoder/preact-cli-unassert.svg?style=flat-square)](https://github.com/logicoder/preact-cli-unassert/blob/master/LICENSE)

## Getting Started

Install it with npm:

```shell
npm i preact-cli-unassert
```

or with yarn:

```shell
yarn add preact-cli-unassert --dev
```

This will also install:

- [babel-plugin-unassert](https://npm.im/babel-plugin-unassert)

And include in your project by creating or adding to `preact.config.js`.

```javascript
export default function customWebpackConfiguration(config, env, helpers) {
  // Along with other customizations and plugin...
  require('preact-cli-unassert')(config, env);
}
```

## Example

Use `console.assert` calls to check your inputs:

```javascript
import { h } from 'preact';

const Asserted = ({ name }) => {
  console.assert(name != null);
  return <p>Hi {name}!</p>;
}

export default Asserted;
```

or the usual `assert` APIs:

```javascript
import assert from 'assert';

function add (a, b) {
    assert(!isNaN(a));
    assert.equal(typeof b, 'number');
    assert.ok(!isNaN(b));
    return a + b;
}
```

## Related

See also [preact-cli-power-assert](https://npm.im/preact-cli-power-assert).

## Thanks

Many thanks to [Jason Miller](https://twitter.com/_developit) for creating [⚛️ Preact](https://preactjs.com/), much of the related ecosystem and lots of useful stuff.

Heavily inspired by [preact-cli-lodash](https://github.com/SaraVieira/preact-cli-lodash) from [Sara Vieira](https://twitter.com/NikkitaFTW).

## License

[MIT](https://mdt.mit-license.org/)
