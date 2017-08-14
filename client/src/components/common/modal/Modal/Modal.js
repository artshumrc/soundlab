import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

class Modal extends React.Component {

	render() {
		const { classes } = this.props;

		return (
			<div
				className={`orpheusModal ${classes.join(' ')}`}
			>
				<div
					className="closeModal"
				>
					<i className="mdi mdi-close" />
				</div>
				<div className="modalInner">
					{this.props.children}
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	classes: PropTypes.arrayOf(PropTypes.string),
};

Modal.defaultProps = {
	classes: [],
};

export default Modal;
