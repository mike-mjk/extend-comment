import gql from 'graphql-tag';

export default gql`
	query UserByName($name: String!) {
		userByName(name: $name) {
			name
			id
		}
	}
`;
