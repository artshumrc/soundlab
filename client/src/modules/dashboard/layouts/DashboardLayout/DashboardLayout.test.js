import React from 'react';
import { shallow } from 'enzyme';
import DashboardLayout from './DashboardLayout';

it('should toggle sidebar class with toggleSidebar method', () => {
	const dashboardLayout = shallow(<DashboardLayout />);

	/*
	dashboard.instance().toggleSidebar();
	const wrapperComponent = dashboard.find('.contentWrapper');
	const sidebarComponent = dashboard.find('.sidebar');

	expect(sidebarComponent.hasClass('sidebarWrapped')).toEqual(true);
	expect(wrapperComponent.hasClass('contentWrapperExpand')).toEqual(true);
	*/

	// sidebar state should be handled in redux
	expect(false).toEqual(true);
});
