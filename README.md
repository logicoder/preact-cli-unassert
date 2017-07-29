# preact-cli-unassert

Plugin for `preact-cli` to remove assertions in production.

## Getting Started

Install it via npm:

```shell
npm i preact-cli-unassert
```

yarn:

```shell
yarn add preact-cli-unassert --dev
```

This will also install:

- [babel-plugin-unassert](https://www.npmjs.com/package/babel-plugin-unassert)

And include in your project by creating a `preact.config.js`

```javascript
const preactCliUnassert = require('preact-cli-unassert');

export default function customWebpackConfiguration(config, env, helpers) {
  // Along with other customizations and plugin...
  preactCliUnassert(config, env);
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

## Thanks

Heavily inspired by [preact-cli-lodash](https://github.com/SaraVieira/preact-cli-lodash) from [Sara Vieira](https://twitter.com/NikkitaFTW).

## License

[MIT](https://mdt.mit-license.org/)
