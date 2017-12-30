import React from 'react';
import { compose } from 'react-apollo';

import ItemDetail from '../../components/ItemDetail';
import itemDetailQuery from '../../graphql/queries/detail';


class ItemDetailContainer extends React.Component {
	render() {
		let item = [];
		let userIsAdmin = false;

		if (
			this.props.itemQuery
			&& this.props.itemQuery.project
		) {
			item = this.props.itemQuery.project.item;
			userIsAdmin = this.props.itemQuery.project.userIsAdmin;
		}

		return (
			<ItemDetail
				{...item}
				userIsAdmin={userIsAdmin}
			/>
		);
	}
}

export default compose(
	itemDetailQuery,
)(ItemDetailContainer);
