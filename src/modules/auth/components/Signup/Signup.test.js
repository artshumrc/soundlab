import React from 'react';
import renderer from 'react-test-renderer';

// component:
import Signup from './index';

describe('Signup', () => {
	it('renders correctly', () => {

		const tree = renderer
			.create(<Signup />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
