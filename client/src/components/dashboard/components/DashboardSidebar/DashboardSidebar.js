import React from 'react';

import './DashboardSidebar.css';

class DashboardSidebar extends React.Component {

	render() {
		return (
			<div className={sidebarClass}>
				<Link to={'/'}>
					<h3 className="invert logo">orphe.us</h3>
				</Link>
				<div className="sidebarMenu">
					<ul>
						<ListItem
							name="Projects"
							url="/dashboard/projects"
						/>
						<ListItem
							name="Project Editor"
							url="/dashboard/projectEditor"
						/>
						<ListItem
							name="Collection Editor"
							url="/dashboard/collectionEditor"
						/>
						<ListItem
							name="Item Editor"
							url="/dashboard/itemEditor"
						/>
						<ListItem
							name="User Profile"
							url="/dashboard/user"
						/>
						<ListItem
							name="Settings"
							url="/dashboard/settings"
						/>
					</ul>
				</div>
			</div>
		);
	}
}


export default DashboardSidebar;
