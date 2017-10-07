import React from 'react';
import { Link } from 'react-router';
import styles from './NavBarHeader.scss';

const NavBarHeader = props => (
	<div className={styles.navHeader}>
		<Link to="/">
			<div className={styles.siteLogo}>
				<div className={styles.siteLogo1} />
				<div className={styles.siteLogo2} />
				<div className={styles.siteLogo3} />
				<div className={styles.siteLogo4} />
			</div>
			<h2 className={styles.siteTitle}>
				Sound Lab
			</h2>
		</Link>
	</div>
);

export default NavBarHeader;
