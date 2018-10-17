import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';


const Modal = ({ children, classes, show, closeModal }) => {

	if (show) {
		document.body.classList.add('js-showing-modal');
		return (
			<div
				className={`orpheusModal ${classes.join(' ')}`}
			>
				<div
					className="closeModal"
					onClick={closeModal}
				>
					<i className="mdi mdi-close" />
				</div>
				<div className="modalInner">
					{children}
				</div>
			</div>
		);
	} else {
		document.body.classList.remove('js-showing-modal');
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
