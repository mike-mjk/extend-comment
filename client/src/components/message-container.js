import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './message';
import { graphql, compose } from 'react-apollo';
import allMessages from '../queries/get-all-messages';
import userByName from '../queries/user-by-name';
import UserList from './user-list';
import { Row, Col } from 'react-bootstrap';

class MessageContainer extends Component {
	renderMessages() {
		if (this.props.userByName.userByName === null) {
			return this.props.allMessages.allMessages.map(message => {
				return (
					<Message
						activeNameId={0}
						activeName={this.props.activeName}
						key={message.id}
						message={message}
						index={message.id}
					/>
				);
			});
		} else {
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
	}

	componentDidUpdate(prevProps) {
		if (!this.props.allMessages.loading) {
			if (this.props.allMessages.allMessages.length > prevProps.allMessages.allMessages.length) {
				this.scrollToBottom();
			}
		}
	}

	scrollToBottom = () => {
		const node = ReactDOM.findDOMNode(this.messagesEnd);
		node.scrollIntoView({ behavior: 'smooth' });
	};

	render() {
		if (this.props.allMessages.loading) {
			return <div>Loading... Which can take some time while the free version of heroku starts up the backend API</div>;
		} else
			return (
				<div>
					<div className="message-container">
						<Row>
							<Col md={2}>
								<UserList />
							</Col>
							<Col md={10}>
								{this.renderMessages()}
							</Col>
						</Row>
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
