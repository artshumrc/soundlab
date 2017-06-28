import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

import Page from './Page';

describe('Page', () => {
	it('renders', () => {
		const wrapper = shallow(<Page />);

		expect(wrapper).toBeDefined();
	});
});
