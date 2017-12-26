import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ItemEditor from '../../components/ItemEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import itemDetailQuery from '../../graphql/queries/detail';
import itemCreateMutation from '../../graphql/mutations/create';
import itemUpdateMutation from '../../graphql/mutations/update';
import itemRemoveMutation from '../../graphql/mutations/remove';


class ItemEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			files: [],
			metadata: [],
		};
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
					router.replace('/items/');
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

	addMetadata() {

	}

	removeMetadata(metadataToRemove) {

	}

	render() {
		const { files, metadata } = this.state;

		let item;

		if (this.props.itemQuery && !this.props.itemQuery.loading) {
			item = this.props.itemQuery.item;
		}

		return (
			<ItemEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				item={item}
				metadata={metadata}
				files={files}
				addMetadata={this.addMetadata}
				removeMetadata={this.removeMetadata}
			/>
		);
	}
}

export default compose(
	itemCreateMutation, itemUpdateMutation, itemRemoveMutation, itemDetailQuery,
)(ItemEditorContainer);
