import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ItemEditor from '../../components/ItemEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import itemDetailQuery from '../../graphql/queries/detail';
import itemUpdateMutation from '../../graphql/mutations/update';
import itemRemoveMutation from '../../graphql/mutations/remove';


class ItemEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(values) {
		const { itemCreate, itemUpdate, router } = this.props;
		delete values.__typename;

		if ('_id' in values) {
			itemUpdate(values)
				.then((response) => {
					router.replace(`/items/${values.slug}`);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			itemCreate(values)
				.then((response) => {
					router.replace(`/items/`);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	handleRemove(itemId) {
		const { itemRemove, router } = this.props;

		itemRemove(itemId)
			.then((response) => {
				router.replace('/items');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		let item;

		if (this.props.itemQuery && !this.props.itemQuery.loading) {
			item = this.props.itemQuery.item;
		}

		return (
			<ItemEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				item={item}
			/>
		);
	}
}

export default compose(
	itemUpdateMutation, itemRemoveMutation, itemDetailQuery,
)(ItemEditorContainer);
