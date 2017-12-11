import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';

import { toggleLeftMenu } from '../../../actions/leftMenu';
import MenuItem from '../MenuItem';
import MenuSubItem from '../MenuSubItem';
import LeftMenuHead from '../LeftMenuHead';

// actions
import { logout, toggleAuthModal } from '../../../modules/auth/actions';
import { logoutUser } from '../../../lib/auth';


import './LeftMenu.css';


const LeftMenu =  ({ leftMenuOpen, closeLeftMenu, userHasRoleForProject, userId, dispatchLogout, dispatchToggleAuthModal }) => (
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
			<MenuSubItem
				to="/collections"
				onClick={closeLeftMenu}
			>
				List
			</MenuSubItem>
			<MenuSubItem
				to="/collections/create"
				onClick={closeLeftMenu}
				last
			>
				Create
			</MenuSubItem>
			<MenuItem
				to="/items"
				onClick={closeLeftMenu}
			>
				Items
			</MenuItem>
			<MenuSubItem
				to="/items"
				onClick={closeLeftMenu}
			>
				List
			</MenuSubItem>
			<MenuSubItem
				to="/items/create"
				onClick={closeLeftMenu}
				last
			>
				Create
			</MenuSubItem>
			<MenuItem
				to="/articles"
				onClick={closeLeftMenu}
			>
				Articles
			</MenuItem>
			<MenuSubItem
				to="/articles"
				onClick={closeLeftMenu}
			>
				List
			</MenuSubItem>
			<MenuSubItem
				to="/articles/create"
				onClick={closeLeftMenu}
				last
			>
				Create
			</MenuSubItem>
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

			{userId ?
				<div>
					<MenuItem
						to="/profile"
						onClick={closeLeftMenu}
					>
						Profile
					</MenuItem>
					<MenuItem
						to="/profile/projects"
						onClick={closeLeftMenu}
					>
						Projects
					</MenuItem>
					<Divider />

					<MenuItem
						to="/"
						onClick={dispatchLogout}
					>
						Sign out
					</MenuItem>
				</div>
			:
				<MenuItem
					onClick={dispatchToggleAuthModal}
				>
					Sign up / in
				</MenuItem>
			}
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
	userId: state.auth.userId,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	closeLeftMenu: () => {
		dispatch(toggleLeftMenu(false));
	},
	dispatchLogout: () => {
		dispatch(logout(logoutUser));
		dispatch(toggleLeftMenu(false));
	},
	dispatchToggleAuthModal: () => {
		dispatch(toggleAuthModal());
		dispatch(toggleLeftMenu(false));
	},
});


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LeftMenu);
