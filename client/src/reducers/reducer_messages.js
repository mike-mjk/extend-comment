import { ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE, LIKE_MESSAGE, UNLIKE_MESSAGE } from '../actions';

const narrator1 =
	'The year is 2020 and BoostLegal has become one the most ubiquitous legal products on the market. The company is worth hundreds of millions of dollars and is looking to expand even further. Currently, two of the early employees are discussing their success over a cup of coffee.';
const roey1 =
	"We've accomplished so much and still have more to do! I'm glad we met at that meetup back in 2017. Your skills and drive have really helped make this company what it is today!";
const mike1 =
	"It's fortunate for both of us! It's been a wild three years and we have developed some really cool product together.";
const roey2 = 'Yea, like this messaging app that allows us to send messages back in time!';
const mike2 =
	"Yea, it'd be cool to be able to time travel ourselves, but for now, sending messages back in time is still pretty cool.";
const roey3 = 'Oh, that reminds me! I need to send a message to my 2017 self to make sure I hire you!';
const roey4 = 'Hey 2017 Roey, are you there?! Make sure you hire this guy!';
const initialMessages = [
	{ name: 'Narrator', message: narrator1, likedBy: [], numLikes: 0 },
	{ name: '2020Roey', message: "Isn't life grand?", likedBy: [], numLikes: 0 },
	{ name: '2020Mike', message: 'It certainly is Roey. ', likedBy: [], numLikes: 0 },
	{ name: '2020Roey', message: roey1, likedBy: [], numLikes: 0 },
	{ name: '2020Mike', message: mike1, likedBy: [], numLikes: 0 },
	{ name: '2020Roey', message: roey2, likedBy: [], numLikes: 0 },
	{ name: '2020Mike', message: mike2, likedBy: [], numLikes: 0 },
	{ name: '2020Roey', message: roey3, likedBy: [], numLikes: 0 },
	{ name: '2020Roey', message: roey4, likedBy: [], numLikes: 0 }
];

export default function(state = initialMessages, action) {
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
		case UNLIKE_MESSAGE:
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
