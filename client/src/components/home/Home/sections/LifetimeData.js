import React from 'react';
import {Row, Col} from 'react-bootstrap';

import './LifetimeData.css';

class LifetimeData extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeStep: 0,
		};

		this.handleStepHover = this.handleStepHover.bind(this);
	}

	handleStepHover(newActiveStepIndex) {
		this.setState({
			activeStep: newActiveStepIndex,
		});
	}

	render() {
		const { activeStep } = this.state;

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
				<div className="lifetimeDataVisualization">
					<div className="lifetimeDataLineGraph" />
				</div>
				<div className="lifetimeDataText">
					<h2>Plan for the full lifetime of your data</h2>

					<div className="lifetimeDataSteps">
						<Row>
							{lifetimeDataMarkers.map((marker, i) => {
								const active = false;

								return (
									<Col
										lg={4}
										key={marker.label}
									>
										<div
											className={`lifetimeDataStep ${activeStep === i ? 'lifetimeDataStepActive' : ''}`}
											onMouseOver={this.handleStepHover.bind(this, i)}
										>
											<div className="lifetimeDataMarker" />
											<span className="lifetimeDataLabel">
												{marker.label}
											</span>
											<p>
												{marker.description}
											</p>
										</div>
									</Col>
								);
							})}
						</Row>
					</div>
				</div>
			</div>
		);
	}
}

export default LifetimeData;
