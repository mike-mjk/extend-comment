import axios from 'axios';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, InputGroup, Row, Col, Clearfix } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import createUser from '../queries/create-user';
import createMessage from '../queries/create-message';
import allMessages from '../queries/get-all-messages';

class MessageInput extends Component {
	constructor(props) {
		super(props);

		this.onMessageSubmit = this.onMessageSubmit.bind(this);
		this.onNameSubmit = this.onNameSubmit.bind(this);

		this.state = {
			message: '',
			name: '',
			activeName: ''
		};
	}

	onMessageSubmit(e) {
		e.preventDefault();
		if (!this.state.activeName) {
			console.log('A');
			if (this.state.name) {
				console.log('B');
				// this.onNameSubmit(e); //async set state problem this way when calling createMessage
				this.props.createUser({ variables: { name: this.state.name } });

				// this.props.addMessage(this.state.name, this.state.message); LEGACY
				this.props.createMessage({
					variables: { name: this.state.name, message: this.state.message },
					refetchQueries: [{ query: allMessages }]
				});
				this.setState({ activeName: this.state.name });

				this.setState({ message: '', name: '' });
			} else {
				alert('Hey, tell us who you are! Enter a username before submitting a message');
			}
		} else if (this.state.message === '') {
			alert('Make sure to enter a message before submitting');
		} else if (this.state.message !== '') {
			// this.props.addMessage(this.props.name, this.state.message); LEGACY
			this.props.createMessage({
				variables: { name: this.state.activeName, message: this.state.message },
				refetchQueries: [{ query: allMessages }]
			});
			this.setState({ message: '' });
		}
	}

	onNameSubmit(e) {
		e.preventDefault();
		if (this.state.name !== '') {
			this.props.createUser({ variables: { name: this.state.name } });
			// this.props.addUser(this.state.name);
			this.setState({ activeName: this.state.name });
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
								{this.state.activeName}
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

// function mapStateToProps(state) {
// 	return {
// 		name: state.name
// 	};
// }

export default compose(graphql(createMessage, { name: 'createMessage' }), graphql(createUser, { name: 'createUser' }))(
	MessageInput
);

// export default graphql(createMessage)(MessageInput);
