import gql from 'graphql-tag';

export default gql`
	{
		allMessages {
			message
			user {
				name
			}
		}
	}
`;
