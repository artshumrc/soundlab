import React from 'react';
import PropTypes from 'prop-types';

import './NumberInput.css';

export default class NumberInput extends React.Component {
	render() {
		return (
			<div className="numberInputWrapper">
				<div className="numberInput">
					<input type="number" value={this.props.value} onChange={this.props.changeCb} disabled={this.props.disabled} />
				</div>
			</div>
		);
	}
}
NumberInput.propTypes = {
	value: PropTypes.number,
	changeCb: PropTypes.func.isRequired
};
