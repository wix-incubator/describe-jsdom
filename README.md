# describe-jsdom

this:
```js
require('describe-jsdom');

describe.jsdom('my thing', function () {
  //your stuff...
});
```

turns into this:
```js
describe('my thing', function () {
  let cleanup;

  beforeEach(function () {
    cleanup = require('jsdom-global')();
  });

  //your stuff...

  afterEach(function () {
    cleanup();
  });
});
```

that is all.

need to pass special config to `jsdom-global`? then use the longer form as shown above :P

## installing

available via npm:
```sh
$ npm install --save-dev describe-jsdom
```

