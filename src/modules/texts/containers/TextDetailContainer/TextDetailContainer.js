import React from 'react';
import { compose } from 'react-apollo';

import ReadingEnvironmentContainer from '../ReadingEnvironmentContainer';
import textDetailQuery from '../../graphql/queries/detail';


class TextDetailContainer extends React.Component {
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
			<ReadingEnvironmentContainer
				{...text}
				userIsAdmin={userIsAdmin}
			/>
		);
	}
}

export default compose(
	textDetailQuery,
)(TextDetailContainer);
