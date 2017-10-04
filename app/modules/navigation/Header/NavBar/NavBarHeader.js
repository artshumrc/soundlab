import React from 'react';
import { Link } from 'react-router';
import styles from './NavBarHeader.scss';

const NavBarHeader = props => (
	<div className={styles.navHeader}>
		<Link to="/">
			<h2 className={styles.siteTitle}>
				Sound Lab
			</h2>
		</Link>
	</div>
);

export default NavBarHeader;
