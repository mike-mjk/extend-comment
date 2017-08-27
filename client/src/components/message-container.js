import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './message';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import allMessages from '../queries/get-all-messages';

class MessageContainer extends Component {
	renderMessages() {
		return this.props.data.allMessages.map((message, index) => {
			console.log('message', message.message);
			return <Message key={index} message={message} index={index} />;
		});
	}

	componentDidUpdate(prevProps) {
		//fix this to be graphql
		if (!this.props.data.loading) {
			// if (this.props.data.allMessages.length > prevProps.data.allMessages.length) {
			// 	this.scrollToBottom();
			// }
		}
	}

	scrollToBottom = () => {
		const node = ReactDOM.findDOMNode(this.messagesEnd);
		node.scrollIntoView({ behavior: 'smooth' });
	};

	render() {
		console.log(this.props);
		if (this.props.data.loading) {
			return <div>loading</div>;
		} else
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

// function mapStateToProps(state) {
// 	return { messages: state.messages };
// }

// export default connect(mapStateToProps, null)(MessageContainer);

export default graphql(allMessages)(MessageContainer);
