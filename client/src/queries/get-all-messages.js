import gql from 'graphql-tag';

export default gql`
	query allMessages {
		allMessages {
			message
			id
			user {
				name
			}
		}
	}
`;
