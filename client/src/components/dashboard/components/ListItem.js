import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

export default class ListItem extends React.Component {
	render() {
		const currentLocation = this.props.currentLocation;
		const active = currentLocation === this.props.url ? 'active' : '';

		return (
			<a href={this.props.url}>
				<li className={active}>
					<FontAwesome name={this.props.fa} /> <span className="listItemText">{this.props.name}</span>
				</li>
			</a>
		);
	}
}
ListItem.propTypes = {
	currentLocation: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	fa: PropTypes.string.isRequired
};
