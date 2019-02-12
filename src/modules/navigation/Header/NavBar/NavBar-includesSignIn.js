import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import './NavBar.css';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			menuOpen: false,
			showDropdown: true
		};

		autoBind(this);
	}

	closeMenu() {
		this.setState({
			menuOpen: false
		});
	}

	handleMouseEnter(){
		this.setState({
			hover: true,
		});
	}

	handleMouseLeave(){
		this.setState({
			hover: false,
		});
	}

	render() {
		const { toggleAuthModal, token, logout } = this.props;
		const { hover } = this.state;

		return (
			<div>
				<Headroom
					className="navbar"
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
				>
					<div className="navHeader">
						<Link to="/">
							<div className="siteLogo">
								<div className={`siteLogo1 ${hover ? 'siteLogo1Hover' : ''}`} />
								<div className="siteLogo2" />
								<div className="siteLogo3" />
								<div className="siteLogo4" />
								<div className={`siteLogo5 ${hover ? 'siteLogo5Hover' : ''}`} />
							</div>
							<h2 className="siteTitle">
								Sound Lab
							</h2>
						</Link>
					</div>
					<ul className="nav">
						<li>
							<Link className="navLink" to={'/events'}>
								Workshops
							</Link>
						</li>
						<li className="hasDropdown">
							<Link className="navLink" to={'/sounds'}>
								Sounds
							</Link>
							<div className="dropdown">
								<li>
									<Link className="navDropdownLink" to={'/playlists'}>
										Playlists
									</Link>
								</li>
							</div>
						</li>
						<li className="hasDropdown">
							<Link className="navLink" to={'/about'}>
								About
							</Link>
							<div className="dropdown">
								<li>
									<Link className="navDropdownLink" to={'/directory'}>
										Directory
									</Link>
								</li>
								<li>
									<Link className="navDropdownLink" to={'/equipment'}>
										Equipment
									</Link>
								</li>
							</div>
						</li>
						{ token ?
							<li className="hasDropdown">
								<Link className="navLink" to={'/profile'}>
									My Pending Submissions
								</Link>
								<div className="dropdown signOutDropdown">
									<li>
										<Link className="navDropdownLink" to="/logout">
											Sign out
										</Link>
									</li>
								</div>
							</li>
						:
							<li>
								<Link
									className="navLink"
									to='/sign-in'
								>
									Join / Login
								</Link>
							</li>
						}
					  </ul>
				</Headroom>
				<Menu
					isOpen={ this.state.menuOpen }
					width={ '300px' }
					right
				>
					<ul >
						<li>
							<Link
								className="navLink"
								to={'/events'}
								onClick={this.closeMenu}
						>
							Workshops
							</Link>
						</li>
						<li className="mobileHasDropdown">
							<Link
								className="navLink"
								to={'/sounds'}
								onClick={this.closeMenu}
						>
							Sounds
							</Link>

							<div className="mobileHasDropdown">
								<li>
									<Link
										className="mobileNavDropdownLink"
										to={'/playlists'}
										onClick={this.closeMenu}
								>
									Playlists
									</Link>
								</li>
							</div>

						</li>
						<li className="mobileHasDropdown">
							<Link
								className="navLink"
								to={'/about'}
								onClick={this.closeMenu}
						>
							About
							</Link>
							<div className="mobileHasDropdown">
								<li>
									<Link
										className="mobileNavDropdownLink"
										to={'/directory'}
										onClick={this.closeMenu}
								>
									Directory
									</Link>
								</li>
								<li>
									<Link
										className="mobileNavDropdownLink"
										to={'/equipment'}
										onClick={this.closeMenu}
								>
									Equipment
									</Link>
								</li>
							</div>
						</li>
						{ token ?
							<li className="mobileHasDropdown">
								<Link className="navLink" to={'/profile'}>
								My Pending Submissions
								</Link>
								<div className="mobileHasDropdown">
									<li>
										<Link className="mobileNavDropdownLink" to="/logout">
										Sign out
										</Link>
									</li>
								</div>
							</li>
					:
							<li>
								<Link
									className="navLink"
									to='/sign-in'
							>
								Join / Login
								</Link>
							</li>
					}

					</ul>

				</Menu>
			</div>
		);
	}
}

NavBar.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	token: PropTypes.string,
};

const mapStateToProps = state => ({
	username: state.auth.username,
	token: state.auth.token,
});


export default connect(mapStateToProps)(NavBar);
