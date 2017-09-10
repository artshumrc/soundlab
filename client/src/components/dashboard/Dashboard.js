import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar';

import './Dashboard.css';

const Dashboard = props => (
	<div id="dashboard">
		<DashboardSidebar />
		<div className="dashboardMain">
			<DashboardHeader />
			<div className="dashboardContent">
				{this.props.children}
			</div>
		</div>
	</div>
);
