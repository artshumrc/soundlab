import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProfileProjects from '../../components/ProfileProjects';
import profileProjectsQuery from '../../graphql/queries/profile';


class ProfileProjectsContainer extends React.Component {
	render() {
		let projects = [];

		if (this.props.profileProjectsQuery && !this.props.profileProjectsQuery.loading) {
			projects = this.props.profileProjectsQuery.profile.projects;
		}

		return (
			<ProfileProjects
				projects={projects}
			/>
		);
	}
}

export default compose(
	profileProjectsQuery,
)(ProfileProjectsContainer);
