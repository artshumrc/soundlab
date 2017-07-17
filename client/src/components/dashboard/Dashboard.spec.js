import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

it('should toggle sidebar class with toggleSidebar method', () => {
	const dashboard = shallow(<Dashboard />);

	dashboard.instance().toggleSidebar();
	const wrapperComponent = dashboard.find('.contentWrapper');
	const sidebarComponent = dashboard.find('.sidebar');

	expect(sidebarComponent.hasClass('sidebarWrapped')).toEqual(true);
	expect(wrapperComponent.hasClass('contentWrapperExpand')).toEqual(true);
});
