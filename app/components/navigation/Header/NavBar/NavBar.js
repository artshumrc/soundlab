import React, {PropTypes} from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import NavBarHeader from './NavBarHeader';

import styles from './NavBar.scss';

const NavBar = ({ toggleAuthModal, userId, logout }) => (
	<Headroom
		className={styles.navbar}
	>
		<NavBarHeader />
		<ul className={styles.nav}>
			<li>
				<Link className={styles.navLink} to={'/audio'}>
					Waves
				</Link>
			</li>
			<li>
				<Link className={styles.navLink} to={'/resources'}>
					Resources
				</Link>
			</li>
			<li>
				<Link className={styles.navLink} to={'/'}>
					About
				</Link>
			</li>
			{ userId ?
				<li>
					<Link className={styles.navLink} to={'/'}>
						Profile
					</Link>
				</li>
			:
				<li>
					<Link
						to={'/'}
						className={styles.navLinkLogin}
						onClick={toggleAuthModal}
					>
						Join / Signup
					</Link>
				</li>
			}
		</ul>
	</Headroom>
);

NavBar.propTypes = {
	toggleAuthModal: PropTypes.func.isRequired,
	userId: PropTypes.string,
};

export default NavBar;
