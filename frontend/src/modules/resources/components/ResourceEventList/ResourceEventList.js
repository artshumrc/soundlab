import React, { Component } from 'react'
import ResourceEventItem from '../ResourceEventItem'
import './ResourceEventList.css'

class ResourceEventList extends Component{
	render() {
		const { events, error, loading } = this.props;

		if (loading) {
			return (
				<div>
					Loading
				</div>
			);
		}

		return (
			<div>
				{events.map((event) => (
					<ResourceEventItem
						key={event.id}
						event={event}
					/>
	      ))}
			</div>
		);
	}
}

ResourceEventList.defaultProps = {
	events: [],
};

export default ResourceEventList;
