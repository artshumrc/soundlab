import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';
import './Dashboard.css';

import ListItem from './components/ListItem';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.state = {
			sidebarVisible: true
		};
	}

	toggleSidebar() {
		this.setState({sidebarVisible: !this.state.sidebarVisible});
	}

	render() {
		const sidebarClass = this.state.sidebarVisible ? 'sidebar' : 'sidebar sidebarWrapped';
		const contentWrapperClass = this.state.sidebarVisible ? 'contentWrapper' : 'contentWrapper contentWrapperExpand';
		const currentLocation = this.props.location.pathname;
		return (
			<div id="dashboard">
				<div className={contentWrapperClass}>
					<div className="topNav">
					</div>
					<div className="dashboardContent">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
