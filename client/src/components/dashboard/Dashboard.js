import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Image} from 'react-bootstrap';
import {Route} from 'react-router';
import './Dashboard.css';
import Articles from './routes/Articles';
import ListItem from './components/ListItem';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.toggleSidebar = this.toggleSidebar.bind(this);
	}

	toggleSidebar() {
		if (this.sidebar.classList.contains('sidebarWrapped')) {
			this.contentWrapper.classList.remove('contentWrapperExpand');
			this.sidebar.classList.remove('sidebarWrapped');
		} else {
			this.contentWrapper.classList.add('contentWrapperExpand');
			this.sidebar.classList.add('sidebarWrapped');
		}
	}

	render() {
		return (
			<div id="dashboard">
				<div
					className="sidebar"
					ref={(div) => {
						this.sidebar = div;
					}}
				>
					<h3 className="invert">Orpheus</h3>
					<div className="sidebarMenu">
						<ul>
							<ListItem fa="file-text-o" name="Main Panel" active />
							<ListItem fa="file" name="Articles" />
							<ListItem fa="user" name="User Profile" />
							<ListItem fa="window-maximize" name="Data Entry" />
							<ListItem fa="folder-open-o" name="Projects" />
							<ListItem fa="cog" name="Settings" />
						</ul>
					</div>
				</div>
				<div
					className="contentWrapper"
					ref={(div) => {
						this.contentWrapper = div;
					}}
				>
					<div className="topNav">
						<a href="#" onClick={this.toggleSidebar} className="toggleSidebar">
							<FontAwesome name="caret-left" />
							<FontAwesome name="bars" size="2x" />
						</a>
						<input type="text" className="searchInput" placeholder="Search..." />
						<div className="navigation pull-right">
							<a href="#">
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
            <Route path="/dashboard/articles" component={Articles} />
          </div>
				</div>
			</div>
		);
	}
}
