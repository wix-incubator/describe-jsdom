'use strict';

describe.jsdom = (name, fn) =>
  describe(name, () => {
    let cleanup;
    beforeEach(() => cleanup = require('jsdom-global')());
    fn();
    afterEach(() => cleanup());
  });
