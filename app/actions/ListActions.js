var Reflux = require('reflux');
var ListActions = Reflux.createActions([
  'addItem',
  // todo: how to have mixed type of items (one of them with children)
  'flagItemComplete',
  'flagItemUndone',
  'deleteItem'
]);

module.exports = ListActions;