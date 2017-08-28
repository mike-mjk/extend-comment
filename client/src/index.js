import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers from './reducers';
import App from './components/App';
import './index.css';

import ApolloClient from 'apollo-client';
import { ApolloProvider, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
	uri: 'https://bl-comment-api.herokuapp.com/graphql'
});

const client = new ApolloClient({
	networkInterface: networkInterface
});

// let store = createStore(combineReducers({ reducers, apollo: client.reducer() }), composeWithDevTools());

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
