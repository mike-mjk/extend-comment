import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

// import { Button, Welcome } from '@storybook/react/demo';

import Message from '../components/message';
import MessageContainer from '../components/message-container';

const store = createStore(reducers);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
// 	.add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// 	.add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
storiesOf('Message', module).add('with text', () => <Message text="This is some text" />);
storiesOf('MessageContainer', module)
	.addDecorator(story =>
		<Provider store={store}>
			{story()}
		</Provider>
	)
	.add('React Component', () => <MessageContainer messages={['heyya', 'another message']} />);
