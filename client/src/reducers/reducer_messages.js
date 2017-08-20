import { ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE, LIKE_MESSAGE } from '../actions';

export default function(
	state = [
		{ name: 'guy1', message: 'hi', likedBy: [], numLikes: 0 },
		{ name: 'guy2', message: 'hey', likedBy: [], numLikes: 0 }
	],
	action
) {
	switch (action.type) {
		case ADD_MESSAGE:
			return [...state, action.payload];
		case DELETE_MESSAGE:
			return [...state.slice(0, action.payload.index), ...state.slice(action.payload.index + 1)];
		case EDIT_MESSAGE:
			return [
				...state.slice(0, action.payload.index),
				{
					name: action.payload.name,
					message: action.payload.message,
					likedBy: action.payload.likedBy,
					numLikes: action.payload.numLikes
				},
				...state.slice(action.payload.index + 1)
			];
		case LIKE_MESSAGE:
			return [
				...state.slice(0, action.payload.index),
				{
					name: action.payload.name,
					message: action.payload.message,
					likedBy: action.payload.likedBy,
					numLikes: action.payload.numLikes
				},
				...state.slice(action.payload.index + 1)
			];
		default:
			return state;
	}
}
