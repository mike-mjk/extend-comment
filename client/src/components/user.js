import React, { Component } from 'react';
import { ListGroupItem, Glyphicon } from 'react-bootstrap';

class UserComp extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onNameChange(this.props.name);
	}

	render() {
		return (
			<ListGroupItem onClick={this.handleClick}>
				{this.props.name}
			</ListGroupItem>
		);
	}
}

export default UserComp;
