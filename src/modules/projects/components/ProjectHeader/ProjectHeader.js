import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import LeftMenu from '../../../../components/navigation/LeftMenu';
import UserAvatarContainer from '../../../users/containers/UserAvatarContainer';

// actions
import * as authActions from '../../../auth/actions';
import { toggleLeftMenu } from '../../../../actions/leftMenu';


import './ProjectHeader.css';

const ProjectHeader = ({ toggleAuthModal, dispatchToggleLeftMenu, leftMenuOpen, userId }) => (
	<div>
		<LeftMenu />
		<Headroom className="navbar">
			<div className="nav-header">
				<i
					className="mdi mdi-menu left-menu-toggle-icon"
					onClick={dispatchToggleLeftMenu.bind(this, !leftMenuOpen)}
				/>
				<Link
					to="/"
				>
					<h2 className="site-title">
						Example Project
					</h2>
				</Link>
			</div>
			<ul className="nav">
				<li>
					<Link to="/collections" >
						Collections
					</Link>
				</li>
				<li>
					<Link to="/articles" >
						Articles
					</Link>
				</li>
				<li>
					<Link
						to="/#about"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="/#visit"
					>
						Visit
					</Link>
				</li>
				<li>
					{ userId ?
						<Link
							to={'/profile'}
							className="userAvatarLink"
						>
							<UserAvatarContainer />
						</Link>
					: '' }
				</li>
				<li>
					{!userId ?
						<Link
							to={'/'}
							className="login-button"
							onClick={toggleAuthModal}
						>
							Sign Up / In
						</Link>
					: '' }
				</li>
				<li>
					<Link
						className="searchLink"
						to="/search"
					>
						<i className="mdi mdi-magnify searchIcon" />
					</Link>
				</li>
			</ul>
		</Headroom>
	</div>
);

ProjectHeader.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	userId: PropTypes.string,
};

ProjectHeader.defaultProps = {
	userId: null
};

const mapStateToProps = state => ({
	userId: state.auth.userId,
	leftMenuOpen: state.leftMenu.open,
});

const mapDispatchToProps = dispatch => ({
	toggleAuthModal: (e) => {
		e.preventDefault();
		dispatch(authActions.toggleAuthModal());
	},
	dispatchToggleLeftMenu: (open) => {
		dispatch(toggleLeftMenu(open));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectHeader);
