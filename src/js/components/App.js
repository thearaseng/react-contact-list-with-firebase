var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');
var AddForm = require('./AddForm');

function getAppStore(){
  return {
    contacts: AppStore.getContacts()
  }
}

var App = React.createClass({

  getInitialState:function(){
    return getAppStore();
  },

  componentWillMount:function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentUnmount:function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    console.log(this.state.contacts)
    return(
      <div>
        <AddForm />
      </div>
      )
  },

  _onChange:function(){
    this.setState(getAppStore());
  }

})

module.exports = App;
