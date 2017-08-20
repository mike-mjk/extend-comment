import React, { Component } from 'react';
import { FormControl, InputGroup, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addMessage, changeName } from '../actions';

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
			this.props.changeName(this.state.name);
			this.setState({ name: '' });
		}
	}
	render() {
		return (
			<Row>
				<Col xs={2}>
					<form onSubmit={this.onNameSubmit}>
						<FormControl
							value={this.state.name}
							placeholder="Enter Username"
							onChange={event => this.setState({ name: event.target.value })}
						/>
					</form>
				</Col>
				<Col xs={10}>
					<form onSubmit={this.onMessageSubmit}>
						<InputGroup>
							<InputGroup.Addon>
								{this.props.name}
							</InputGroup.Addon>
							<FormControl
								value={this.state.message}
								placeholder="Enter a message"
								onChange={event => this.setState({ message: event.target.value })}
							/>
						</InputGroup>
					</form>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps(state) {
	return {
		name: state.name
	};
}

export default connect(mapStateToProps, { addMessage, changeName })(MessageInput);
