import React from 'react';
import './LifetimeData.css';

const LifetimeData = props => {
	const lifetimeDataMarkers = [{
		label: 'Entry',
		description: 'Begin by entering your data in a digital form using our sophisticated but simple data entry forms',
	}, {
		label: 'Publishing',
		description: 'Publish as much of your collections as you want and embed item records in a beautifully designed content authoring interface',
	}, {
		label: 'Export',
		description: 'Begin by entering your data in a digital form using our sophisticated but simple data entry forms',
	}];

	return (
		<div className="lifetimeData">
			<h2>Plan for the full lifetime of your data</h2>

			<div className="lifetimeDataSteps">
				{lifetimeDataMarkers.map(marker => {
					const active = false;

					return (
						<div className="lifetimeDataStep">
							<div className="lifetimeDataMarker" />
							<span className="lifetimeDataLabel">
								{marker.label}
							</span>
							<p>
								{marker.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LifetimeData;
