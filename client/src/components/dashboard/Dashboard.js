import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Image} from 'react-bootstrap';
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
				<div className={sidebarClass}>
					<h3 className="invert">Orpheus</h3>
					<div className="sidebarMenu">
						<ul>
							<ListItem currentLocation={currentLocation} fa="file-text-o" name="Main Panel" url="/dashboard" />
							<ListItem currentLocation={currentLocation} fa="file" name="Articles" url="/dashboard/articles" />
							<ListItem currentLocation={currentLocation} fa="user" name="User Profile" url="/dashboard/user" />
							<ListItem currentLocation={currentLocation} fa="window-maximize" name="Data Entry" url="/dashboard/data" />
							<ListItem currentLocation={currentLocation} fa="folder-open-o" name="Projects" url="/dashboard/projects" />
							<ListItem currentLocation={currentLocation} fa="cog" name="Settings" url="/dashboard/settings" />
							<ListItem currentLocation={currentLocation} fa="file" name="Example Forms" url="/dashboard/form" />
							<ListItem currentLocation={currentLocation} fa="file" name="Item Editor" url="/dashboard/itemEditor" />
							<ListItem currentLocation={currentLocation} fa="file" name="Collection Editor" url="/dashboard/collectionEditor" />

						</ul>
					</div>
				</div>
				<div className={contentWrapperClass}>
					<div className="topNav">
						<a href="#sidebar" onClick={this.toggleSidebar} className="toggleSidebar">
							<FontAwesome name="caret-left" />
							<FontAwesome name="bars" size="2x" />
						</a>
						<input type="text" className="searchInput" placeholder="Search..." />
						<div className="navigation pull-right">
							<a href="#profile">
								<div className="userPanel">
									<div className="userImage">
										<span className="status" />
										<Image src="/images/bw.png" circle />
									</div>
									<div>
                    Bruce Wayne
                  </div>
									<FontAwesome name="arrow-down" />
								</div>
							</a>
							<div className="notifications">
								<div className="notification">
									<FontAwesome name="bell" />
									<span className="notificationBadge">13</span>
								</div>
								<div className="notification">
									<span className="notificationBadge">1</span>
									<FontAwesome name="envelope-o" />
								</div>
							</div>
						</div>
					</div>
					<div className="dashboardContent">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
