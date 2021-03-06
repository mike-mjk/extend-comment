import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import UserComp from './user';
import allUsers from '../queries/all-users';
import { graphql } from 'react-apollo';

class UserList extends Component {
	renderList() {
		return this.props.data.allUsers.map(name => {
			return <UserComp key={name.name} onNameChange={this.props.onNameChange} name={name.name} />;
		});
	}
	render() {
		if (this.props.data.loading) {
			return <div>Hi</div>;
		} else {
			return (
				<div className="user-list">
					<h4>User List</h4>
					<ListGroup>
						{this.renderList()}
					</ListGroup>
				</div>
			);
		}
	}
}

export default graphql(allUsers)(UserList);
