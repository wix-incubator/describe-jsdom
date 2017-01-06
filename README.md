# describe-jsdom

this:
```js
require('describe-jsdom');

describe.jsdom('my thing', function () {
  //...
});
```

turns into this:
```js
describe('my thing', function () {
  let cleanup;

  beforeEach(function () {
    cleanup = require('jsdom-global')());
  });

  afterEach(function () {
    cleanup();
  });

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

