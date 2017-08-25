import React from 'react';
import renderer from 'react-test-renderer';

// component:
import OAuthButtons from './index';

describe('OAuthButtons', () => {
	it('renders correctly', () => {

		const tree = renderer
			.create(<OAuthButtons />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
