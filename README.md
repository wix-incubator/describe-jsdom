# describe-jsdom

this:
```js
require('describe-jsdom'); //better add to test/mocha.opts

describe.jsdom('my thing', function () {
  //...
});
```

turns into this:
```js
describe('my thing', function () {
  let cleanup;
  beforeEach(() => cleanup = require('jsdom-global')());
  afterEach(() => cleanup());

  //...
});
```

that is all.

need to pass special config to `jsdom-global`? then use the longer form as shown above :P

## installing

available via npm:
```sh
$ npm install --save-dev jsdom-gloabl
```

optionally add to your `test/mocha.opts` so you only require it once:
```sh
-r describe-jsdom
```
