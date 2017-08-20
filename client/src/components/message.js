import React, { Component } from 'react';
import { Row, Col, Button, Modal, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteMessage, editMessage, likeMessage, unLikeMessage } from '../actions';
import classNames from 'classnames';

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
		console.log('this', this);
		if (this.state.tempMessage !== '') {
			this.props.editMessage(
				this.props.index,
				this.state.tempMessage,
				this.props.message.name,
				this.props.message.likedBy,
				this.props.message.numLikes
			);
		} else if (this.state.tempMessage === '') {
			this.props.deleteMessage(this.props.index);
		}
		this.setState({ showModal: false });
	}
	render() {
		let { name, deleteMessage, likeMessage, unLikeMessage, index, message } = this.props;
		let currentlyLiked = message.likedBy.includes(name);
		let likeBtnClass = classNames({
			hidden: currentlyLiked
		});
		let unLikeBtnClass = classNames({
			hidden: !currentlyLiked
		});
		return (
			<Row className="content">
				<Col xs={7} xsOffset={2}>
					<div>
						<p className="name">
							{message.name}
						</p>
						<p className="message">
							{message.message}
						</p>
					</div>
				</Col>
				<Col xs={3} className="aux-panel">
					<div>
						<Button className={likeBtnClass} onClick={() => likeMessage(index, message, name)}>
							Like {message.numLikes}
						</Button>
						<Button className={unLikeBtnClass} onClick={() => unLikeMessage(index, message, name)}>
							Unlike {message.numLikes}
						</Button>
						<Button onClick={this.onEditClick}>Edit</Button>
						<Button bsStyle="danger" onClick={() => deleteMessage(index)}>
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

function mapStateToProps(state) {
	return {
		messages: state.messages,
		name: state.name
	};
}

export default connect(mapStateToProps, { deleteMessage, editMessage, likeMessage, unLikeMessage })(Message);
