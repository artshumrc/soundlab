import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import './DashboardSidebar.css';

class DashboardSidebar extends React.Component {

	render() {
		return (
			 <Drawer open>
				<Link to={'/'}>
					<h3 className="invert logo">orphe.us</h3>
				</Link>
				<Menu>
					<MenuItem
						primaryText="Projects"
						url="/dashboard/projects"
					/>
					<MenuItem
						primaryText="Project Editor"
						url="/dashboard/projectEditor"
					/>
					<MenuItem
						primaryText="Collections"
						url="/dashboard/collections"
						menuItems={[
							<MenuItem
								primaryText="New"
								url="/dashboard/collections/create"
							/>,
							<MenuItem
								primaryText="Edit"
								url="/dashboard/collections/edit"
							/>,
						]}
					/>
					<MenuItem
						primaryText="Item Editor"
						url="/dashboard/itemEditor"
					/>
					<MenuItem
						primaryText="User Profile"
						url="/dashboard/user"
					/>
					<MenuItem
						primaryText="Settings"
						url="/dashboard/settings"
					/>
				</Menu>
			</Drawer>
		);
	}
}


export default DashboardSidebar;
