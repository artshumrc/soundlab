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
		return (
			<ProjectNameAvailabilityCheck
				onChange={this.props.onChange}
				projectFound={this.props.project}
			/>
		)
	}
}

export default compose(
	projectDetailQuery,
)(ProjectNameAvailabilityCheckContainer);
