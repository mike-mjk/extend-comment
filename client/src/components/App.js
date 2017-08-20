import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Header from './header';
import MessageInput from './message-input';
import MessageContainer from './message-container';
import '../App.css';

class App extends Component {
	render() {
		return (
			<Grid>
				<Header />
				<div id="message-container" className="tall style-1">
					<MessageContainer />
				</div>
				<MessageInput />
			</Grid>
		);
	}
}

export default App;
