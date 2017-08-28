import gql from 'graphql-tag';

export default gql`
	query LikedByUser($user_id: ID!, $message_id: ID!) {
		likedByUser(user_id: $user_id, message_id: $message_id) {
			userId
			messageId
		}
	}
`;
