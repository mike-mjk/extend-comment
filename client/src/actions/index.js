export const ADD_MESSAGE = 'add_message';
export const CHANGE_NAME = 'change_name';

export function addMessage(message) {
	return {
		type: ADD_MESSAGE,
		payload: message
	};
}

export function changeName(name) {
	return {
		type: CHANGE_NAME,
		payload: name
	};
}
