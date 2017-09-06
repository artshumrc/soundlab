import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as d3 from 'd3';

import './LifetimeData.css';

class LifetimeData extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeStep: 0,
		};

		this.handleStepHover = this.handleStepHover.bind(this);
	}

	componentDidMount() {
		const data = [{
			date: '1-May-12',
			close: 58.13,
		}, {
			date: '30-Apr-12',
			close: 53.98,
		}, {
			date: '27-Apr-12',
			close: 67.00,
		}, {
			date: '26-Apr-12',
			close: 89.70,
		}, {
			date: '25-Apr-12',
			close: 99.00,
		}];

		// Set the dimensions of the canvas / graph
		const margin = { top: 30, right: 20, bottom: 30, left: 50 };
		const width = 600 - margin.left - margin.right;
		const height = 270 - margin.top - margin.bottom;

		// parse the date / time
		const parseTime = d3.timeParse("%d-%b-%y");
		// set the ranges
	 	const x = d3.scaleTime().range([0, width]);
		const y = d3.scaleLinear().range([height, 0]);
		// define the line
		const valueline = d3.line()
			.x((d) => x(d.date) )
			.y((d) => y(d.close) );
		// append the svg obgect to the body of the page
		// appends a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
		const svg = d3.select("body").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform",
				  "translate(" + margin.left + "," + margin.top + ")");

	  // format the data
	  data.forEach((d) => {
		  d.date = parseTime(d.date);
		  d.close = +d.close;
	  });

	  // Scale the range of the data
	  x.domain(d3.extent(data, (d) => d.date ));
	  y.domain([0, d3.max(data, (d) => d.close )]);

	  // Add the valueline path.
	  svg.append("path")
		  .data([data])
		  .attr("class", "line")
		  .attr("d", valueline);

	  // Add the X Axis
	  svg.append("g")
		  .attr("transform", "translate(0," + height + ")")
		  .call(d3.axisBottom(x));

	  // Add the Y Axis
	  svg.append("g")
		  .call(d3.axisLeft(y));
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
