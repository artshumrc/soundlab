import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ProjectNameAvailabilityCheck from '../../components/ProjectNameAvailabilityCheck';
import projectDetailQuery from '../../graphql/queries/detail';
import projectCreateMutation from '../../graphql/mutations/create';



class ProjectNameAvailabilityCheckContainer extends React.Component {

	constructor(props) {
		super(props);
		autoBind(this);
	}

	render() {
		let projectFound = false;

		if (
			this.props.params.hostname
			&& this.props.params.hostname.length
			&& this.props.projectQuery
			&& this.props.projectQuery.project
		) {
			projectFound = true;
		}


		return (
			<ProjectNameAvailabilityCheck
				projectFound={projectFound}
				onChange={this.props.onChange}
				onSubmit={this.props.onSubmit}
			/>
		)
	}
}

export default compose(
	projectDetailQuery,
)(ProjectNameAvailabilityCheckContainer);
