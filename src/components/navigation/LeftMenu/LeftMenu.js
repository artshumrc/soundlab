import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

import { toggleLeftMenu } from '../../../actions/leftMenu';
import MenuItem from '../MenuItem';
import LeftMenuHead from '../LeftMenuHead';


import './LeftMenu.css';


const LeftMenu =  ({ leftMenuOpen, closeLeftMenu, userHasRoleForProject }) => (
	<Drawer
		open={leftMenuOpen}
		docked={false}
		onRequestChange={closeLeftMenu}
		className="leftMenu"
	>
		<LeftMenuHead />
		<div className="leftMenuContent">
			<MenuItem
				to="/"
				onClick={closeLeftMenu}
			>
				Home
			</MenuItem>
			<MenuItem
				to="/collections"
				onClick={closeLeftMenu}
			>
				Collections
			</MenuItem>
			<MenuItem
				to="/items"
				onClick={closeLeftMenu}
			>
				Items
			</MenuItem>
			{userHasRoleForProject ?
				<div>
					<MenuItem
						to="/dashboard"
						onClick={closeLeftMenu}
					>
						Dashboard
					</MenuItem>
					<MenuItem
						to="/dashboard/settings"
						onClick={closeLeftMenu}
					>
						Settings
					</MenuItem>
				</div>
			: ''}
			<Divider />

			<MenuItem
				to="/profile"
				onClick={closeLeftMenu}
			>
				Profile
			</MenuItem>
			<MenuItem
				to="/collections"
				onClick={closeLeftMenu}
			>
				Projects
			</MenuItem>
			<Divider />

			<MenuItem
				to="/items"
				onClick={closeLeftMenu}
			>
				Sign out
			</MenuItem>
		</div>
	</Drawer>

);


LeftMenu.propTypes = {
	leftMenuOpen: PropTypes.bool,
	closeLeftMenu: PropTypes.func,
	userHasRoleForProject: PropTypes.bool,
};

LeftMenu.defaultProps = {
	userHasRoleForProject: false,
};

const mapStateToProps = (state, props) => ({
	leftMenuOpen: state.leftMenu.open,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	closeLeftMenu: () => {
		dispatch(toggleLeftMenu(false));
	},
});


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LeftMenu);
