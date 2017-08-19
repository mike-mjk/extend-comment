import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class MessageInput extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);

		this.state = {
			text: ''
		};
	}

	onFormSubmit(e) {
		e.preventDefault();
		if (this.state.text !== '') {
			this.props.addMessage(this.state.text);
			this.setState({ text: '' });
		}
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<FormControl value={this.state.text} onChange={event => this.setState({ text: event.target.value })} />;
			</form>
		);
	}
}

export default connect(null, { addMessage })(MessageInput);
