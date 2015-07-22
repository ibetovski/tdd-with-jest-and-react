jest.dontMock('../../app/actions/ListActions.js');
jest.dontMock('../../app/stores/ListStore.js');
jest.dontMock('../../app/components/List.js');

describe('Functional List', function() {
  var React;
  var TestUtils;
  var List;
  var Action;
  var Store;

  var renderedComponent;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;

    // Actions = require('../../app/components/List.js');
    Action = require('../../app/actions/ListActions.js');
    Store = require('../../app/stores/ListStore.js');

    Action.addItem({text: 'Item 1' });
    Action.addItem({text: 'Item 2' });
    Action.addItem({text: 'Item 3' });
    Action.addItem({text: 'Item 4' });

    jest.runAllTimers();

    List = require('../../app/components/List.js');
  });

  beforeEach(function() {
    renderedComponent = TestUtils.renderIntoDocument(
        <List data={Store} />
      );
  });

  it('should list the items from the store', function() {
    var elements = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'li');
    expect(elements.length).toEqual(Store.getItems().length);
  });

  it('should print the name', function() {
    var elements = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'li');
    expect(elements[0].getDOMNode().textContent).toEqual(Store.getItems()[0].text);
  });

  it('should add new item to the list', function() {
    var text = 'manamanamana';
    var count = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'li').length;

    var input = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
    var submit = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'input');
    TestUtils.Simulate.change(input, { target: { value: text } });

  });
});