import React, { Component } from 'react';
import Message from './message';
import { connect } from 'react-redux';

class MessageContainer extends Component {
	renderMessages() {
		return this.props.messages.map((message, index) => {
			return <Message key={index} message={message} index={index} />;
		});
	}
	render() {
		return (
			<div>
				<div className="message-container">
					{this.renderMessages()}
				</div>
				<div
					id="dummy-div"
					style={{ float: 'left', clear: 'both' }}
					ref={el => {
						this.messagesEnd = el;
					}}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { messages: state.messages };
}

export default connect(mapStateToProps, null)(MessageContainer);
