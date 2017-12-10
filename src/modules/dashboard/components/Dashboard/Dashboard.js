import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import CountSection from '../CountSection';
import ProjectRecentActivityContainer from '../../../projects/containers/ProjectRecentActivityContainer';

import './Dashboard.css';


const Dashboard = ({ collectionsCount, articlesCount, itemsCount, textsCount }) => {
	const hostname = getCurrentProjectHostname();

	return (
		<div className="dashboard">
			<div className="dashboardNav">
				<Link
					to="/dashboard/settings"
				>
					<i className="mdi mdi-settings" />
					Settings
				</Link>
				<Link
					to="/dashboard/people"
				>
					<i className="mdi mdi-account-multiple" />
					Members
				</Link>
				<Link
					to="/help"
				>
					<i className="mdi mdi-information-outline" />
					Support
				</Link>
			</div>
			<div className="dashboardCounts">
				<Row>
					<Col md={3}>
						<CountSection
							label="Collection"
							labelPlural="Collections"
							count={collectionsCount}
							addLink="/collections/create"
							addLinkText="Create a collection"
						/>
					</Col>
					<Col md={3}>
						<CountSection
							label="Item"
							labelPlural="Items"
							count={itemsCount}
							addLink="/items/create"
							addLinkText="Create an item"
						/>
					</Col>
					<Col md={3}>
						<CountSection
							label="Article"
							labelPlural="Articles"
							count={articlesCount}
							addLink="/articles/create"
							addLinkText="Create an article"
						/>
					</Col>
					<Col md={3}>
						<CountSection
							label="Text"
							labelPlural="Texts"
							count={textsCount}
							addLink="/texts/create"
							addLinkText="Create a text"
						/>
					</Col>
				</Row>
			</div>
			<div className="dashboardRecentActivity">
				<Row>
					<Col>
						<h2>Recent Activity</h2>
						<hr />
					</Col>
				</Row>
				<ProjectRecentActivityContainer
					params={{
						hostname,
					}}
				/>
			</div>
		</div>
	);
}

Dashboard.propTypes = {
	collectionsCount: PropTypes.number,
	articlesCount: PropTypes.number,
	itemsCount: PropTypes.number,
	textsCount: PropTypes.number,
};

Dashboard.defaultProps = {
	collectionsCount: 227,
	articlesCount: 0,
	itemsCount: 0,
	textsCount: 0,
};

export default Dashboard;
