import React from 'react';
import { Link } from 'react-router';

import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

import MenuItem from '../MenuItem';
import LeftMenuHead from '../LeftMenuHead';


import './LeftMenu.css';


const LeftMenu =  ({ open, closeLeftMenu }) => (
	<Drawer
		open={open}
		docked={false}
		onRequestChange={closeLeftMenu}
		className="leftMenu"
	>
		<LeftMenuHead />
		<div className="leftMenuContent">
			<Link to="/">
				<MenuItem
					primaryText="Add Comment"
					onClick={closeLeftMenu}
				/>
			</Link>
			<Divider />
		</div>
	</Drawer>

);

export default LeftMenu;
