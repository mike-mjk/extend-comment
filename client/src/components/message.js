import React, { Component } from 'react';

class Message extends Component {
	render() {
		return (
			<div>
				<p className="name">
					{this.props.message.name}
				</p>
				<p className="message">
					{this.props.message.message}
				</p>
			</div>
		);
	}
}

export default Message;
