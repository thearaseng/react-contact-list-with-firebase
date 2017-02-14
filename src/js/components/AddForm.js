var React = require('react');
var AppActions = require('../actions/AppActions');

var AddForm = React.createClass({

  render: function(){
    return(
      <div className="well">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="name" placeholder="Contact Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref="phone" placeholder="Contact phone" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref="email" placeholder="Contact Email" />
          </div>
          <button className="btn btn-primary" type="submit">Add Contact</button>
        </form>
      </div>
      )
  },

  handleSubmit:function(e){
    e.preventDefault();
    var contact = {
      name: this.refs.name.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value
    }
    AppActions.saveContact(contact);
  }

})

module.exports = AddForm;
