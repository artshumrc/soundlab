import React, {PropTypes} from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules'

import NavBarHeader from './NavBarHeader';
import styles from './NavBar.scss';


@CSSModules(styles, {allowMultiple: true})
class NavBar extends React.Component {
	render() {
		const { toggleAuthModal, userId, logout } = this.props;
		
		return (
			<Headroom
				styleName="navbar"
			>
				<NavBarHeader />
				<ul styleName="nav">
					<li>
						<Link styleName="navLink" to={'/audio'}>
							Waves
						</Link>
					</li>
					<li>
						<Link styleName="navLink" to={'/resources'}>
							Resources
						</Link>
					</li>
					<li>
						<Link styleName="navLink" to={'/about'}>
							About
						</Link>
					</li>
					{ userId ?
						<li>
							<Link styleName="navLink" to={'/'}>
								Profile
							</Link>
						</li>
					:
						<li>
							<Link
								to={'/'}
								styleName="navLink"
								onClick={toggleAuthModal}
							>
								Join / Login
							</Link>
						</li>
					}
				</ul>
			</Headroom>
		);
	}
}

NavBar.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	userId: PropTypes.string,
};

export default NavBar;
