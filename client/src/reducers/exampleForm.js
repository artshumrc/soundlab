import { CHANGE_VALUE } from '../actions/exampleForm';

const initialState = {
	username: 'test',
	email: 'bruce@wayneenterprises.com'
};

export default function exampleForm(state = initialState, action) {
	switch (action.type) {

	case CHANGE_VALUE:
		const newValue = {};
		newValue[action.name] = action.currentValue;
		return Object.assign({}, state, newValue);
	default:
		return state;
	}
}
