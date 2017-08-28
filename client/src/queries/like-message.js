import gql from 'graphql-tag';

export default gql`
	mutation LikeMessage($user_id: ID!, $message_id: ID!) {
		likeMessage(user_id: $user_id, message_id: $message_id) {
			userId
			messageId
		}
	}
`;
