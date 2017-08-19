import { ADD_MESSAGE } from '../actions';

export default function(state = [{ name: 'guy1', message: 'hi' }, { name: 'guy2', message: 'hey' }], action) {
	switch (action.type) {
		case ADD_MESSAGE:
			return [...state, action.payload];
		default:
			return state;
	}
}
