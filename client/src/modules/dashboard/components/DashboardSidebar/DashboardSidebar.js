import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

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
						menuItems={[
							<MenuItem
								primaryText="New"
								containerElement={<Link to="/dashboard/projects/create" />}
							/>,
							<MenuItem
								primaryText="Edit"
								containerElement={<Link to="/dashboard/projects/edit" />}
							/>,
						]}
					/>
					<MenuItem
						primaryText="Collections"
						menuItems={[
							<MenuItem
								primaryText="New"
								containerElement={<Link to="/dashboard/collections/create" />}
							/>,
							<MenuItem
								primaryText="Edit"
								containerElement={<Link to="/dashboard/collections/edit" />}
							/>,
						]}
					/>
					<MenuItem
						primaryText="Items"
						menuItems={[
							<MenuItem
								primaryText="New"
								containerElement={<Link to="/dashboard/items/create" />}
							/>,
							<MenuItem
								primaryText="Edit"
								containerElement={<Link to="/dashboard/items/edit" />}
							/>,
						]}
					/>
					<Divider />
					<MenuItem
						primaryText="Profile"
						containerElement={<Link to="/dashboard/user" />}
					/>
					<Divider />
					<MenuItem
						primaryText="Settings"
						containerElement={<Link to="/dashboard/settings" />}
					/>
				</Menu>
			</Drawer>
		);
	}
}


export default DashboardSidebar;
