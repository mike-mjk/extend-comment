import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './message';
// import { connect } from 'react-redux';
// import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import allMessages from '../queries/get-all-messages';
import userByName from '../queries/user-by-name';

class MessageContainer extends Component {
	renderMessages() {
		return this.props.allMessages.allMessages.map(message => {
			return (
				<Message
					activeNameId={this.props.userByName.userByName.id}
					activeName={this.props.activeName}
					key={message.id}
					message={message}
					index={message.id}
				/>
			);
		});
	}

	componentDidUpdate(prevProps) {
		//fix this to be graphql
		if (!this.props.allMessages.loading) {
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
		console.log('this.props in message-container', this.props);
		if (this.props.allMessages.loading) {
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

export default compose(
	graphql(allMessages, { name: 'allMessages' }),
	graphql(userByName, {
		options: props => {
			return { variables: { name: props.activeName } };
		},
		name: 'userByName'
	})
)(MessageContainer);
