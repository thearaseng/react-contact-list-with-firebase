var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/appAPI');

var CHANGE_EVENT = 'change';

var _contacts = [];

var AppStore = assign({}, EventEmitter.prototype, {
  getContacts:function(){
    return _contacts;
  },
  saveContact:function(contact){
    _contacts.push(contact);
    this.emitChange();
  },
  setContacts:function(contacts){
    _contacts = contacts;
    this.emitChange();
  },
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener:function(callback){
    this.on('change', callback);
  },
  removeChangeListener:function(callback){
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(action){
  switch(action.actionType){
    case AppConstants.SAVE_CONTACT:
      AppStore.saveContact(action.contact);
      AppAPI.saveContact(action.contact);
      break;
    case AppConstants.RECEIVE_CONTACT:
      AppStore.setContacts(action.contacts);
      break;
  }
  return true;
})

module.exports = AppStore;
