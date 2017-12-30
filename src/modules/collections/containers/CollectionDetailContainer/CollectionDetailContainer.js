import React from 'react';
import { compose } from 'react-apollo';

import CollectionDetail from '../../components/CollectionDetail';
import collectionDetailQuery from '../../graphql/queries/detail';


class CollectionDetailContainer extends React.Component {
	render() {
		let collection = [];
		let userIsAdmin = false;

		if (
			this.props.collectionQuery
			&& this.props.collectionQuery.project
		) {
			collection = this.props.collectionQuery.project.collection;
			userIsAdmin = this.props.collectionQuery.project.userIsAdmin;
		}

		return (
			<CollectionDetail
				{...collection}
				userIsAdmin={userIsAdmin}
			/>
		);
	}
}

export default compose(
	collectionDetailQuery,
)(CollectionDetailContainer);
