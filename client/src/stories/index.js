import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

import '../index.css';
import '../bootstrap/css/bootstrap.css';

// import { Button, Welcome } from '@storybook/react/demo';

import Message from '../components/message';
import MessageContainer from '../components/message-container';
import MessageInput from '../components/message-input';
import App from '../components/App';

const store = createStore(reducers); // storiesOf('Message', module).add('with text', () => <Message text="This is some text" />); // storiesOf('App', module).add('App', () => <App />);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
// 	.add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// 	.add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
storiesOf('App', module)
	.addDecorator(story =>
		<Provider store={store}>
			{story()}
		</Provider>
	)
	.add('App', () => <App />);
storiesOf('MessageContainer', module)
	.addDecorator(story =>
		<Provider store={store}>
			{story()}
		</Provider>
	)
	.add('Message Container', () => <MessageContainer />);
storiesOf('Message', module)
	.addDecorator(story =>
		<Provider store={store}>
			{story()}
		</Provider>
	)
	.add('Message', () => <Message message={{ name: 'mike', message: 'Hey there', numLikes: 10, likedBy: [] }} />);
storiesOf('MessageInput', module)
	.addDecorator(story =>
		<Provider store={store}>
			{story()}
		</Provider>
	)
	.add('Message Input', () => <MessageInput />);
