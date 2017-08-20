export const ADD_MESSAGE = 'add_message';
export const CHANGE_NAME = 'change_name';
export const DELETE_MESSAGE = 'delete_message';
export const EDIT_MESSAGE = 'edit_message';
export const LIKE_MESSAGE = 'like_message';

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

export function likeMessage(index, message, name, likedBy, numLikes) {
	let incLikes = numLikes + 1;
	console.log(numLikes, incLikes);
	likedBy.push(name);
	console.log('likedby', likedBy);
	return {
		type: LIKE_MESSAGE,
		payload: {
			index: index,
			message: message,
			name: name,
			likedBy: likedBy,
			numLikes: incLikes
		}
	};
}

export function changeName(name) {
	return {
		type: CHANGE_NAME,
		payload: name
	};
}
