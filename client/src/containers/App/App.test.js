import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

// import configureStore from 'store/configureStore';
import { App } from './App';

injectTapEventPlugin();

describe('App', () => {
	describe('#render()', () => {
		it('renders shallowly', () => {
			const wrapper = shallow(
				<App />
			);
			expect(wrapper).toBeDefined();
		});
	});
});
