var Reflux = require('reflux');
var ListActions = require('../actions/ListActions.js');

var items = [];

function generateId() {
  return Math.floor(Math.round(Math.random() * 10000));
}

var ListStore = Reflux.createStore({

  listenables: ListActions,

  getItems: function() {
    return items;
  },

  getItemById: function(id) {
    for (var i = 0; i <= items.length; i++) {
      if (items[i].id === id) return items[i];
    }
  },

  onAddItem: function(item) {
    item.id = generateId();
    item.status = 0;
    items.push(item);
    this.trigger(item.id);
  },

  onFlagItemComplete: function(id) {
    this.getItemById(id).status = 1;
  },

  onFlagItemUndone: function(id) {
    this.getItemById(id).status = 0;
  }

});

module.exports = ListStore;