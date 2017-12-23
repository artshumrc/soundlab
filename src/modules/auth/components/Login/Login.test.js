import React from 'react';
import { mount, shallow } from 'enzyme';

// component
import Login from './Login';

describe('Login', () => {
	it('renders correctly', () => {
		const wrapper = shallow(
			<Login
				onRegisterClick={() => {}}
				login={() => {}}
			/>
		);
		expect(wrapper).toBeDefined();
	});
});
