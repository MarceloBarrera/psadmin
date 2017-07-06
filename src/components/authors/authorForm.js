"use strict";

var React = require('react');

var AuthorForm = React.createClass({	

	render: function() {
		return (
			<form>
				<h1>Manage Author</h1>
                <label htmlFor="firstName">First Name</label>
				<input type="text"
					name="firstName"
					className="form-control"
                    placeholder="firstName" 
                    ref="firstName"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName} />
                <br />
                <label htmlFor="lastName">Last Name</label>
				<input type="text"
					name="lastName"
					className="form-control"
                    placeholder="lastName" 
                    ref="lastName"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}/>
                <br />

				<input type="submit" value="Save" className="btn btn-default" />
			</form>            
		);
	}
});

module.exports = AuthorForm;