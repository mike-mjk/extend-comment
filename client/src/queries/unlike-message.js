import gql from 'graphql-tag';

export default gql`
	mutation UnlikeMessage($user_id: ID!, $message_id: ID!) {
		unLikeMessage(user_id: $user_id, message_id: $message_id) {
			userId
			messageId
		}
	}
`;
