import { ADD_MESSAGE } from '../actions';

export default function(state = ['hey', 'hi'], action) {
	switch (action.type) {
		case ADD_MESSAGE:
			console.log('action.payload', action.payload);
			return [...state, action.payload];
		default:
			return state;
	}
}
