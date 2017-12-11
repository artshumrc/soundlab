import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ItemEditor from '../../components/ItemEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import itemDetailQuery from '../../graphql/queries/detail';
import itemUpdateMutation from '../../graphql/mutations/update';
import itemRemoveMutation from '../../graphql/mutations/remove';


class _ItemEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(values) {
		const { itemUpdate, router } = this.props;
		delete values.__typename;
		itemUpdate(values)
			.then((response) => {
				router.replace(`/dashboard/`);
			})
			.catch((err) => {
				console.log(err);
			});
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

const _ItemEditorContainerWithQuery =  compose(
	itemUpdateMutation, itemRemoveMutation, itemDetailQuery,
)(_ItemEditorContainer);


const ItemEditorContainer = () => {
	const hostname = getCurrentProjectHostname();
	return (
		<_ItemEditorContainerWithQuery
			params={{
				hostname,
			}}
		/>
	);
}

export default ItemEditorContainer;
