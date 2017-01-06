'use strict';

describe.jsdom = (name, fn) =>
  describe(name, () => {
    let cleanup;
    beforeEach(() => cleanup = require('jsdom-global')());
    afterEach(() => cleanup());
    fn();
  });
