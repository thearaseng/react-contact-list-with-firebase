var AppActions = require('../actions/AppActions');
var firebase = require('firebase');

const AppAPI = {
  firebaseRef : firebase.initializeApp({
    apiKey: "AIzaSyAphlQBZ76F4QhldrYoWSkhlc7BLTZRM04",
    authDomain: "react-contact-list-175cf.firebaseapp.com",
    databaseURL: "https://react-contact-list-175cf.firebaseio.com",
    storageBucket: "react-contact-list-175cf.appspot.com",
    messagingSenderId: "446397193151"
  }),
  getContactTree:function(){
    return this.firebaseRef.database().ref().child('contacts');
  },
  newContact : function(){
    return this.getContactTree().push();
  },
  getContacts:function(){
    var contacts = []
    this.getContactTree().once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var contact = {
          id: childSnapshot.key,
          name: childSnapshot.val().name,
          phone: childSnapshot.val().phone,
          email: childSnapshot.val().email
        }
        contacts.push(contact);
      })
    })
    AppActions.receiveContacts(contacts);
  },
  saveContact : function(contact) {
    this.newContact().set(contact);
  }
}

module.exports = AppAPI
