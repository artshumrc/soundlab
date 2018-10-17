import React from 'react';
import renderer from 'react-test-renderer';

// component:
import Login from './index';

describe('Login', () => {
	it('renders correctly', () => {

		const tree = renderer
			.create(<Login />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
