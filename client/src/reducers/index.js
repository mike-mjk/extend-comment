import { combineReducers } from 'redux';
import MessagesReducer from './reducer_messages';
import NameReducer from './reducer_name';

const rootReducer = combineReducers({
	messages: MessagesReducer,
	name: NameReducer
});

export default rootReducer;
