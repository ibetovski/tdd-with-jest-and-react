jest.dontMock('../app/actions/ListActions.js');
jest.dontMock('../app/stores/ListStore.js');

describe('List', function() {
  var React;
  var Store;
  var Actions;
  var TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    Actions = require('../app/actions/ListActions.js');
    Store = require('../app/stores/ListStore.js');
    Main = require('../app/components/Main.js');
    console.log('-->', Store);
  });

  it('should be empty', function() {
    expect(Store.getItems()).toEqual([]);
  });

  it('should add todo to the list', function() {
    expect(Store.getItems()).toEqual([]);
    Actions.addItem({
      text: "To do something"
    });

    expect(Store.getItems()[0]).toEqual({
      status: 0,
      text: "To do something"
    });

  });
});