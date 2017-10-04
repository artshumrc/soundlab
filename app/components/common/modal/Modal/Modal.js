import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.scss';


const Modal = ({ children, classes, show, closeModal }) => {

	if (show) {
		return (
			<div
				className={`${styles.orpheusModal} ${classes.join(' ')}`}
			>
				<div
					className={styles.closeModal}
					onClick={closeModal}
				>
					<i className="mdi mdi-close" />
				</div>
				<div className={styles.modalInner}>
					{children}
				</div>
			</div>
		);
	}
	return null;
};

Modal.propTypes = {
	children: PropTypes.element.isRequired,
	closeModal: PropTypes.func.isRequired,
	classes: PropTypes.arrayOf(PropTypes.string),
	show: PropTypes.bool,
};

Modal.defaultProps = {
	show: false,
	classes: [],
};

export default Modal;
