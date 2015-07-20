var Reflux = require('reflux');
var ListActions = require('../actions/ListActions.js');

var items = [];

console.log('actions:', ListActions);

var ListStore = Reflux.createStore({

  listenables: ListActions,
  
  getItems: function() {
    return items;
  },

  onAddItem: function(item) {
    console.log('--------------------------234234');
    item.status = 0;
    items.push(item);
  }

});

module.exports = ListStore;