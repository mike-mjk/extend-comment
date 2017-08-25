import { combineReducers } from 'redux';
import MessagesReducer from './reducer_messages';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
	messages: MessagesReducer,
	user: UserReducer
});

export default rootReducer;
