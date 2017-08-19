export const ADD_MESSAGE = 'add_message';

export function addMessage(message) {
	console.log('message in action creator', message);
	return {
		type: ADD_MESSAGE,
		payload: message
	};
}
