import gql from 'graphql-tag';

export default gql`
	mutation UnlikeMessage($user_id: Int!, $message_id: Int!) {
		unlikeMessage(user_id: $user_id, message_id: $message_id) {
			id
		}
	}
`;
