export const ADD_MESSAGE = 'add_message';
export const CHANGE_NAME = 'change_name';

export function addMessage(name, message) {
	return {
		type: ADD_MESSAGE,
		payload: {
			name: name,
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
