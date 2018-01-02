import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

// components
import ItemDetail from '../../components/ItemDetail';

// graphql
import itemDetailQuery from '../../graphql/queries/detail';
import itemRemoveMutation from '../../graphql/mutations/remove';


class ItemDetailContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleRemove(itemId) {
		console.log('####')
		console.log('####')
		console.log('####')
		console.log(itemId);
		console.log('####')
		console.log('####')
		const { itemRemove, router } = this.props;

		itemRemove(itemId)
			.then((response) => {
				router.replace('/items');
			})
			.catch((err) => {
				console.error(err);
			});
	}

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
				handleRemove={this.handleRemove}
			/>
		);
	}
}

export default compose(
	itemDetailQuery, itemRemoveMutation
)(ItemDetailContainer);
