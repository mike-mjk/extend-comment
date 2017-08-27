import gql from 'graphql-tag';

export default gql`
	mutation CreateMessage($name: String!, $message: String!) {
		createMessage(name: $name, message: $message) {
			id
		}
	}
`;
