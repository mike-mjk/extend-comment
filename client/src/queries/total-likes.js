import gql from 'graphql-tag';

export default gql`
	query TotalLikes($message_id: ID!) {
		totalLikes(message_id: $message_id) {
			userId
		}
	}
`;
