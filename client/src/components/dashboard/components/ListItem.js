import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ListItem extends React.Component {
	render() {
		const active = this.props.active ? 'active' : '';
		return (
			<a href="#">
				<li className={active}>
					<FontAwesome name={this.props.fa} /> <span className="listItemText">{this.props.name}</span>
				</li>
			</a>
		);
	}
}
