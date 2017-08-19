import React, { Component } from 'react';
import Message from './message';
import { connect } from 'react-redux';

class MessageContainer extends Component {
	renderMessages() {
		return this.props.messages.map((message, index) => {
			return <Message key={index} message={message} />;
		});
	}
	render() {
		return (
			<div>
				{this.renderMessages()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { messages: state.messages };
}

export default connect(mapStateToProps, null)(MessageContainer);
