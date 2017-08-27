import gql from 'graphql-tag';

export default gql`
	mutation CreateUser($name: String!) {
		createUser(name: $name) {
			name
		}
	}
`;
