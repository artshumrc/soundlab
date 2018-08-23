import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import styles from './NavBar.scss';

@CSSModules(styles, {allowMultiple: true})
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
					styleName="navbar"
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
				>
					<div styleName="navHeader">
						<Link to="/">
							<div styleName="siteLogo">
								<div className={`${styles.siteLogo1} ${hover ? styles.siteLogo1Hover : ''}`} />
								<div styleName="siteLogo2" />
								<div styleName="siteLogo3" />
								<div styleName="siteLogo4" />
								<div className={`${styles.siteLogo5} ${hover ? styles.siteLogo5Hover : ''}`} />
							</div>
							<h2 styleName="siteTitle">
								Sound Lab
							</h2>
						</Link>
					</div>
					<ul styleName="nav">
						<li styleName="hasDropdown">
							<Link styleName="navLink" to={'/sounds'}>
								Sounds
							</Link>
							<div styleName="dropdown">
								<li>
									<Link styleName="navDropdownLink" to={'/playlists'}>
										Playlists
									</Link>
								</li>
							</div>
						</li>
						<li styleName="hasDropdown">
							<Link styleName="navLink" to={'/resources'}>
								Resources
							</Link>
							<div styleName="dropdown">
								<li>
									<Link styleName="navDropdownLink" to={'/events'}>
										Events
									</Link>
								</li>
								<li>
									<Link styleName="navDropdownLink" to={'/equipment'}>
										Equipment
									</Link>
								</li>
							</div>
						</li>
						<li>
							<Link styleName="navLink" to={'/about'}>
								About
							</Link>
						</li>
						{ token ?
							<li styleName="hasDropdown">
								<Link styleName="navLink" to={'/profile'}>
									My Tracks
								</Link>
								<div styleName="dropdown signOutDropdown">
									<li>
										<Link styleName="navDropdownLink" to="/logout">
											Sign out
										</Link>
									</li>
								</div>
							</li>
						:
							<li>
								<Link
									styleName="navLink"
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
					<li styleName="mobileHasDropdown">
						<Link styleName="navLink" to={'/sounds'} onClick={this.closeMenu}>
							Sounds
						</Link>

						<div styleName="mobileHasDropdown">
							<li>
								<Link styleName="mobileNavDropdownLink" to={'/playlists'}>
									Playlists
								</Link>
							</li>
						</div>

					</li>
					<li styleName="mobileHasDropdown">
						<Link styleName="navLink" to={'/resources'}>
							Resources
						</Link>
						<div styleName="mobileHasDropdown">
							<li>
								<Link styleName="mobileNavDropdownLink" to={'/events'}>
									Events
								</Link>
							</li>
							<li>
								<Link styleName="mobileNavDropdownLink" to={'/equipment'}>
									Equipment
								</Link>
							</li>
						</div>
					</li>
					<li>
						<Link styleName="navLink" to={'/about'}>
							About
						</Link>
					</li>
					{ token ?
						<li styleName="mobileHasDropdown">
							<Link styleName="navLink" to={'/profile'}>
								My Tracks
							</Link>
							<div styleName="mobileHasDropdown">
								<li>
									<Link styleName="mobileNavDropdownLink" to="/logout">
										Sign out
									</Link>
								</li>
							</div>
						</li>
					:
						<li>
							<Link
								styleName="navLink"
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
