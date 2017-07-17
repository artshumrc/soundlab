import React from 'react';

export class Timeline extends React.Component {
	render() {
		return (
			<ul className="timeline">
				{this.props.children}
			</ul>
		);
	}
}
export class TimelineItem extends React.Component {
	render() {
		return (
			<li className="timelineItem">
				<div className="timelineItemContent">
					{this.props.message}
					<span className="timelineDate">{this.props.date}</span>
				</div>
			</li>
		);
	}
}
