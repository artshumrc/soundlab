import React from 'react';
import { compose } from 'react-apollo';

import ReadingEnvironment from '../../components/ReadingEnvironment';
import textDetailQuery from '../../graphql/queries/detail';


class ReadingEnvironmentContainer extends React.Component {
	render() {
		let text = [];
		let userIsAdmin = false;

		if (
			this.props.textQuery
			&& this.props.textQuery.project
		) {
			text = this.props.textQuery.project.text;
			userIsAdmin = this.props.textQuery.project.userIsAdmin;
		}

		return (
			<ReadingEnvironment
				{...text}
				userIsAdmin={userIsAdmin}
			/>
		);
	}
}

export default compose(
	textDetailQuery,
)(ReadingEnvironmentContainer);
