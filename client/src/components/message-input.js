import axios from 'axios';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, InputGroup, Row, Col, Clearfix } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addMessage, addUser } from '../actions';

class MessageInput extends Component {
	constructor(props) {
		super(props);

		this.onMessageSubmit = this.onMessageSubmit.bind(this);
		this.onNameSubmit = this.onNameSubmit.bind(this);

		this.state = {
			message: '',
			name: ''
		};
	}

	onMessageSubmit(e) {
		e.preventDefault();
		if (this.props.name === '') {
			if (this.state.name !== '') {
				this.onNameSubmit(e);
				this.props.addMessage(this.state.name, this.state.message);
				this.setState({ message: '' });
			} else {
				alert('Hey, tell us who you are! Enter a username before submitting a message');
			}
		} else if (this.state.message === '') {
			alert('Make sure to enter a message before submitting');
		} else if (this.state.message !== '') {
			this.props.addMessage(this.props.name, this.state.message);
			this.setState({ message: '' });
		}
	}

	onNameSubmit(e) {
		e.preventDefault();
		if (this.state.name !== '') {
			this.props.addUser(this.state.name);
			this.setState({ name: '' });
			document.getElementById('message-input').focus();
		}
	}
	render() {
		return (
			<Row className="footer">
				<Col xs={6} sm={2} className="username-input">
					<form onSubmit={this.onNameSubmit}>
						<FormControl
							value={this.state.name}
							placeholder="Enter Username"
							onChange={event => this.setState({ name: event.target.value })}
						/>
					</form>
				</Col>
				<Col xs={12} sm={10}>
					<form onSubmit={this.onMessageSubmit}>
						<InputGroup>
							<InputGroup.Addon>
								{this.props.name}
							</InputGroup.Addon>
							<FormControl
								id="message-input"
								value={this.state.message}
								placeholder="Enter a message"
								onChange={event => this.setState({ message: event.target.value })}
							/>
						</InputGroup>
					</form>
				</Col>
				<Clearfix />
				<a href="https://github.com/mike-mjk/comment-app" target="_blank">
					<i className="fa fa-github fa-lg github" aria-hidden="true" />
				</a>
			</Row>
		);
	}
}

function mapStateToProps(state) {
	return {
		name: state.name
	};
}

export default connect(mapStateToProps, { addMessage, addUser })(MessageInput);
