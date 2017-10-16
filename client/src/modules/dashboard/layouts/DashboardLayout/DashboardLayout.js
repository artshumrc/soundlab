import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar';

import './DashboardLayout.css';

const DashboardLayout = props => (
	<div id="dashboard">
		<DashboardSidebar />
		<div className="dashboardMain">
			<DashboardHeader />
			<div className="dashboardContent">
				{props.children}
			</div>
		</div>
	</div>
);

export default DashboardLayout;
