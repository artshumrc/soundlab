// @flow

// https://github.com/reactjs/redux/blob/master/examples/real-world/src/middleware/api.js
// TODO: Consider using schemas (as in the example above) to normalize data

const BASE_URL = 'http://localhost:3001';

const _handleJsonResponse = response => response.json().then(json => {
	if (!response.ok) {
		return Promise.reject(json);
	}

	return json;
});

const callApi = url => fetch(url).then(_handleJsonResponse);

const postApi = (url, body) => {
	try {
		body = JSON.stringify(body);
	} catch (e) {
		return Promise.reject(e);
	}

	const headers = new Headers({
		'Content-Type': 'application/json',
		'Content-Length': body.length.toString()
	});

	const opts = {
		body,
		headers,
		method: 'POST',
		mode: 'cors'
	};

	return fetch(url, opts).then(_handleJsonResponse);
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API';
export const POST_API = 'Post API';

// A Redux middleware that interprets actions with CALL_API or POST_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
	const callApiAction = action[CALL_API] || action[POST_API];

	if (typeof callApiAction === 'undefined') {
		return next(action);
	}

	let { endpoint } = callApiAction;
	const { types } = callApiAction;

	if (typeof endpoint === 'function') {
		endpoint = endpoint(store.getState());
	}

	if (typeof endpoint !== 'string') {
		throw new Error('Specify a string endpoint URL.');
	}

	if (!Array.isArray(types) || types.length !== 3) {
		throw new Error('Expected an array of three action types.');
	}

	if (!types.every(type => typeof type === 'string')) {
		throw new Error('Expected action types to be strings.');
	}

	const actionWith = data => {
		const finalAction = Object.assign({}, action, data);
		delete finalAction[CALL_API];
		return finalAction;
	};

	const [requestType, successType, failureType] = types;

	next(actionWith({ type: requestType }));

	const url = `${BASE_URL}${endpoint}`;

	let p = null;
	if (typeof action[POST_API] !== 'undefined') {
		p = postApi(url, callApiAction.data);
	} else {
		p = callApi(url);
	}

	return p.then(
		response => next(actionWith({
			response,
			type: successType
		})),
		error => next(actionWith({
			type: failureType,
			error: error.message || new Error('Something bad happened')
		}))
	);
};
