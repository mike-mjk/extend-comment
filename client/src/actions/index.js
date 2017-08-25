export const ADD_MESSAGE = 'add_message';
export const CHANGE_NAME = 'change_name';
export const DELETE_MESSAGE = 'delete_message';
export const EDIT_MESSAGE = 'edit_message';
export const LIKE_MESSAGE = 'like_message';
export const UNLIKE_MESSAGE = 'like_message';

const ROOT_URL = 'https://bl-comment-api.herokuapp.com';

export function addMessage(name, message) {
	return {
		type: ADD_MESSAGE,
		payload: {
			name: name,
			message: message,
			likedBy: [],
			numLikes: 0
		}
	};
}

export function deleteMessage(index) {
	return {
		type: DELETE_MESSAGE,
		payload: {
			index: index
		}
	};
}

export function editMessage(index, message, name, likedBy, numLikes) {
	return {
		type: EDIT_MESSAGE,
		payload: {
			index: index,
			message: message,
			name: name,
			likedBy: likedBy,
			numLikes: numLikes
		}
	};
}

export function likeMessage(index, message, liker) {
	let incLikes = message.numLikes + 1;
	message.likedBy.push(liker);
	return {
		type: LIKE_MESSAGE,
		payload: {
			index: index,
			message: message.message,
			name: message.name,
			likedBy: message.likedBy,
			numLikes: incLikes
		}
	};
}

export function unLikeMessage(index, message, unliker) {
	let decLikes = message.numLikes - 1;
	let indexOfLiker = message.likedBy.indexOf(unliker);
	message.likedBy.splice(indexOfLiker, 1);
	return {
		type: UNLIKE_MESSAGE,
		payload: {
			index: index,
			message: message.message,
			name: message.name,
			likedBy: message.likedBy,
			numLikes: decLikes
		}
	};
}

export function changeName(name) {
	return {
		type: CHANGE_NAME,
		payload: name
	};
}
