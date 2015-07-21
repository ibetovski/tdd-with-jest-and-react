jest.dontMock('../app/actions/ListActions.js');
jest.dontMock('../app/stores/ListStore.js');

describe('List', function() {
  var React;
  var Store;
  var Actions;
  var TestUtils;
  var unsubscribe;
  var itemId;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    Actions = require('../app/actions/ListActions.js');
    Store = require('../app/stores/ListStore.js');
  });

  beforeEach(function() {
    unsubscribe = Store.listen(function(id) {
      itemId = id;
    });

    Actions.addItem({
      text: "To do something"
    });

    jest.runOnlyPendingTimers();
  });

  afterEach(function() {
    if (typeof unsubscribe === 'function') {
      unsubscribe();
      unsubscribe = null;
    }

    itemId = null;
  });

  it('should add todo to the list', function() {
    expect(Store.getItems()[0].status).toEqual(0);
    expect(Store.getItems()[0].text).toEqual("To do something");
  });

  it('should gives us the new item\'s id on add', function() {
    expect(itemId).toBeTruthy();
  });

  it('should complete an item', function() {
    Actions.flagItemComplete(itemId);
    jest.runOnlyPendingTimers();
    expect(Store.getItemById(itemId).status).toEqual(1);
  });

  it('should flag item as undone', function() {
    Actions.flagItemComplete(itemId);
    jest.runOnlyPendingTimers();
    expect(Store.getItemById(itemId).status).toEqual(1);

    Actions.flagItemUndone(itemId);
    jest.runOnlyPendingTimers();
    expect(Store.getItemById(itemId).status).toEqual(0);
  });
});