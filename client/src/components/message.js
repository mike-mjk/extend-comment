import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteMessage, editMessage } from '../actions';

class Message extends Component {
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
						<Button onClick={() => this.props.editMessage(this.props.index)}>Edit</Button>
					</div>
				</Col>
			</Row>
		);
	}
}

export default connect(null, { deleteMessage })(Message);
