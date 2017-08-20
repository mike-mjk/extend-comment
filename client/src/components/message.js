import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteMessage, editMessage } from '../actions';

class Message extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};

		this.onEditClick = this.onEditClick.bind(this);
		this.close = this.close.bind(this);
	}

	close() {
		this.setState({ showModal: false });
	}

	onEditClick() {
		this.setState({ showModal: true });
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
								<p>Text</p>
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

export default connect(null, { deleteMessage })(Message);
