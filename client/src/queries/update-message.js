import gql from 'graphql-tag';

export default gql`
	mutation UpdateMessage($id: ID!, $message: String!) {
		updateMessage(id: $id, message: $message) {
			message
		}
	}
`;
