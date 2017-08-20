import React, { Component } from 'react';
import { Row, Col, Button, Modal, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteMessage, editMessage } from '../actions';

class Message extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			message: this.props.message.message
		};

		this.onEditClick = this.onEditClick.bind(this);
		this.close = this.close.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	close() {
		this.setState({ showModal: false });
	}

	onEditClick() {
		this.setState({ showModal: true });
	}

	onFormSubmit(e) {
		e.preventDefault();
		console.log('this', this);
		this.props.editMessage(this.props.index, this.state.message, this.props.message.name);
		this.setState({ showModal: false });
	}
	render() {
		return (
			<Row className="content">
				<Col xs={7} xsOffset={2}>
					<div>
						<p className="name">
							{this.props.message.name}
						</p>
						<p className="message">
							{this.props.message.message}
						</p>
					</div>
				</Col>
				<Col xs={3}>
					<div>
						<Button onClick={() => this.props.deleteMessage(this.props.index)}>Delete</Button>
						<Button onClick={this.onEditClick}>Edit</Button>
						<Modal show={this.state.showModal} onHide={this.close}>
							<Modal.Body>
								<form onSubmit={this.onFormSubmit}>
									<FormControl
										value={this.state.message}
										onChange={event => this.setState({ message: event.target.value })}
									/>
								</form>
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={this.close}>Close</Button>
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
		messages: state.messages
	};
}

export default connect(mapStateToProps, { deleteMessage, editMessage })(Message);
