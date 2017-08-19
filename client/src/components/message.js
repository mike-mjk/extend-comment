import React, { Component } from 'react';

class Message extends Component {
	render() {
		console.log('this.props.text', this.props.text);
		return (
			<div>
				{this.props.text}
			</div>
		);
	}
}

export default Message;
