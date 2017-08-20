export const ADD_MESSAGE = 'add_message';
export const CHANGE_NAME = 'change_name';
export const DELETE_MESSAGE = 'delete_message';
export const EDIT_MESSAGE = 'edit_message';

export function addMessage(name, message) {
	return {
		type: ADD_MESSAGE,
		payload: {
			name: name,
			message: message
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

export function editMessage(index, message) {
	return {
		type: EDIT_MESSAGE,
		payload: {
			index: index,
			message: message
		}
	};
}

export function changeName(name) {
	return {
		type: CHANGE_NAME,
		payload: name
	};
}
