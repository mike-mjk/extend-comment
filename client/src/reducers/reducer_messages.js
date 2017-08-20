import { ADD_MESSAGE, DELETE_MESSAGE } from '../actions';

export default function(state = [{ name: 'guy1', message: 'hi' }, { name: 'guy2', message: 'hey' }], action) {
	switch (action.type) {
		case ADD_MESSAGE:
			return [...state, action.payload];
		case DELETE_MESSAGE:
			return [...state.slice(0, action.payload.index), ...state.slice(action.payload.index + 1)];
		default:
			return state;
	}
}
