import React, { Component } from 'react';

class Message extends Component {
	render() {
		return (
			<div>
				{this.props.message.name}
				{this.props.message.message}
			</div>
		);
	}
}

export default Message;
