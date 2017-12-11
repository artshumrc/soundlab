import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProfileProjects from '../../components/ProfileProjects';
import profileProjectsQuery from '../../graphql/queries/profileProjects';


class ProfileProjectsContainer extends React.Component {
	render() {
		let projects = [];
		
		if (
			this.props.userProjectsQuery
			&& !this.props.userProjectsQuery.loading
			&& this.props.userProjectsQuery.userProjects
		) {
			projects = this.props.userProjectsQuery.userProjects;
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
