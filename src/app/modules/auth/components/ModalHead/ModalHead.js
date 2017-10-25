import React from 'react';

import styles from './ModalHead.scss';


const ModalHead = props => (

	<div className={styles.modalHeadOuter}>
		<div className={styles.siteLogo}>
			<div className={styles.siteLogo1} />
			<div className={styles.siteLogo2} />
			<div className={styles.siteLogo3} />
			<div className={styles.siteLogo4} />
			<div className={styles.siteLogo5} />
		</div>
		<h2 className={styles.siteTitle}>
			Sound Lab
		</h2>
	</div>
);

export default ModalHead;
