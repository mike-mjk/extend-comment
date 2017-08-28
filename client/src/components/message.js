import React, { Component } from 'react';
import { Row, Col, Button, Modal, FormControl } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { deleteMessage, editMessage, likeMessage, unLikeMessage } from '../actions'; //LEGACY
import classNames from 'classnames';
import deleteMessage from '../queries/delete-message';
import updateMessage from '../queries/update-message';
import { graphql, compose } from 'react-apollo';
import allMessages from '../queries/get-all-messages';
import likeMessage from '../queries/like-message';
import unlikeMessage from '../queries/unlike-message';
import likedByUser from '../queries/liked-by-user';

class Message extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			message: this.props.message.message,
			tempMessage: this.props.message.message
		};

		this.onEditClick = this.onEditClick.bind(this);
		this.cancel = this.cancel.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	cancel() {
		this.setState({ showModal: false, tempMessage: this.props.message.message });
	}

	onEditClick() {
		this.setState({ showModal: true });
	}

	onFormSubmit(e) {
		e.preventDefault();
		if (this.state.tempMessage !== '') {
			// this.props.editMessage(  //LEGACY
			// 	this.props.index,
			// 	this.state.tempMessage,
			// 	this.props.message.name,
			// 	this.props.message.likedBy,
			// 	this.props.message.numLikes
			// );
			this.props.updateMessage({
				variables: { id: this.props.index, message: this.state.tempMessage },
				refetchQueries: [{ query: allMessages }]
			});
		} else if (this.state.tempMessage === '') {
			this.props.deleteMessage({ variables: { id: this.props.index }, refetchQueries: [{ query: allMessages }] });
		}
		this.setState({ showModal: false });
	}
	render() {
		console.log('this.props in message', this.props);
		let { name, deleteMessage, likeMessage, unlikeMessage, index, message } = this.props;
		//fix me changed while graphql setup
		let currentlyLiked = false;
		console.log('this.props', this.props);
		if (this.props.likedByUser.loading === false) {
			console.log('this.props.likedByUser.likedByUser', this.props.likedByUser.likedByUser);
			if (this.props.likedByUser.likedByUser !== null) console.log('HERE');
			currentlyLiked = true;
		}
		// let currentlyLiked = ; //message.likedBy.includes(name);
		let likeBtnClass = classNames({
			hidden: !currentlyLiked
		});
		let unLikeBtnClass = classNames({
			hidden: currentlyLiked
		});
		console.log('currentlyLiked', currentlyLiked);
		return (
			<Row className="content">
				<Col md={7} mdOffset={2}>
					<div>
						<p className="name">
							{message.user.name}
						</p>
						<p className="message">
							{message.message}
						</p>
					</div>
				</Col>
				<Col md={3} className="aux-panel">
					<div>
						<Button
							className={likeBtnClass}
							onClick={() => likeMessage({ variables: { user_id: this.props.activeNameId, message_id: index } })}
						>
							Like {message.numLikes}
						</Button>
						<Button className={unLikeBtnClass} onClick={() => unlikeMessage(index, message, name)}>
							Unlike {message.numLikes}
						</Button>
						<Button onClick={this.onEditClick}>Edit</Button>
						<Button
							bsStyle="danger"
							onClick={() =>
								deleteMessage({ variables: { id: this.props.index }, refetchQueries: [{ query: allMessages }] })}
						>
							Delete
						</Button>
						<Modal show={this.state.showModal} onHide={this.close}>
							<Modal.Body>
								<form onSubmit={this.onFormSubmit}>
									<FormControl
										value={this.state.tempMessage}
										onChange={event => this.setState({ tempMessage: event.target.value })}
									/>
								</form>
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={this.cancel}>Cancel</Button>
								<Button bsStyle="success" onClick={this.onFormSubmit}>
									Save Changes
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</Col>
			</Row>
		);
	}
}

// function mapStateToProps(state) {
// 	return {
// 		messages: state.messages,
// 		name: state.name
// 	};
// }

// export default connect(mapStateToProps, { deleteMessage, editMessage, likeMessage, unLikeMessage })(Message);
export default compose(
	graphql(deleteMessage, { name: 'deleteMessage' }),
	graphql(updateMessage, { name: 'updateMessage' }),
	graphql(likeMessage, { name: 'likeMessage' }),
	graphql(unlikeMessage, { name: 'unlikeMessage' }),
	graphql(likedByUser, {
		options: props => {
			return { variables: { user_id: props.activeNameId, message_id: props.index } };
		},
		name: 'likedByUser'
	})
)(Message);
