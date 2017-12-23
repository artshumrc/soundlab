import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import ProjectRecentActivity from '../../components/ProjectRecentActivity';
import projectActivityQuery from '../../graphql/queries/activity';



const ProjectRecentActivityContainer = () => {
	const activityFeed = [];

	return (
		<ProjectRecentActivity
			activityFeed={activityFeed}
		/>
	);
};


export default compose(
	projectActivityQuery,
)(ProjectRecentActivityContainer);
