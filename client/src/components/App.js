import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Header from './header';
import MessageInput from './message-input';
import MessageContainer from './message-container';
import '../App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.onNameChange = this.onNameChange.bind(this);
		this.state = { activeName: '' };
	}

	onNameChange(name) {
		this.setState({ activeName: 'Mike' });
	}

	render() {
		return (
			<Grid>
				<Header />
				<div id="message-container" className="tall style-1">
					<MessageContainer activeName={this.state.activeName} />
				</div>
				<MessageInput onNameChange={this.onNameChange} activeName={this.state.activeName} />
			</Grid>
		);
	}
}

export default App;
