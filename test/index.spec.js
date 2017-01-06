const {expect} = require('chai');
const React = require('react');
const {mount} = require('enzyme');

require('../src');

describe.jsdom('with jsom', () => {
  it('should mount element', () => {
    const element = mount(React.createElement('div', null, 'hello world!'));
    expect(element.text()).to.equal('hello world!');
  });

  it('should provide global window', () => {
    global.window.aaa = 1;
    expect(global.window.aaa).to.equal(1);
  });

  it('should cleanup after each test', () => {
    expect(global.window.aaa).to.equal(undefined);
  });
});

describe('without jsdom', () => {
  it('should fail to mount element', () => {
    expect(() => mount(React.createElement('div', null, 'hello world!'))).to.throw('global document');
  });
});
