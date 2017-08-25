import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './message';
import { connect } from 'react-redux';

class MessageContainer extends Component {
	renderMessages() {
		return this.props.messages.map((message, index) => {
			return <Message key={index} message={message} index={index} />;
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.messages.length > prevProps.messages.length) {
			this.scrollToBottom();
		}
	}

	scrollToBottom = () => {
		const node = ReactDOM.findDOMNode(this.messagesEnd);
		node.scrollIntoView({ behavior: 'smooth' });
	};

	render() {
		return (
			<div>
				<div className="message-container">
					{this.renderMessages()}
					Hiya
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
