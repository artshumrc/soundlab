import React from 'react';
import renderer from 'react-test-renderer';

// component:
import PWDSignupForm from './index';

describe('PWDSignupForm', () => {
	it('renders correctly', () => {

		const tree = renderer
			.create(<PWDSignupForm />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
