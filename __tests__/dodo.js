jest.dontMock('../app/components/Main.js');

describe('Dodo', function() {
  var React;
  var Main;
  var TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    Main = require('../app/components/Main.js');
    TestUtils = React.addons.TestUtils;
  });

  it('should print the passed text', function() {
    var instance = TestUtils.renderIntoDocument(<Main text="Alabala" />);
    // expect(1).toEqual(1);
    expect(instance.getDOMNode().textContent).toEqual('Alabala');
    // React.addons.TestUtils.renderIntoDocument(Main);
  });
});