import { CHANGE_NAME } from '../actions';

export default function(state = '', action) {
	switch (action.type) {
		case CHANGE_NAME:
			return action.payload;
		default:
			return state;
	}
}
