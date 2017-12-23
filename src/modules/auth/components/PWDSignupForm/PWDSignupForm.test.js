import React from 'react';
import { mount, shallow } from 'enzyme';

// component
import PWDSignupForm from './PWDSignupForm';

describe('PWDSignupForm', () => {
	it('renders correctly', () => {

		const wrapper = shallow(<PWDSignupForm />);
		expect(wrapper).toBeDefined();
	});
});
