import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ItemEditor from '../../components/ItemEditor';
import itemListQuery from '../../graphql/queries/list';
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
		};
	}

	handleSubmit(_values) {
		const { itemCreate, itemUpdate, router } = this.props;
		const values = Object.assign({}, _values);

		// remove non-input values
		delete values.__typename;
		delete values.comments;
		delete values.commentsCount;

		// sanitize metadata
		const metadata = [];
		if (values.metadata) {
			values.metadata.forEach(metadataField => {
				// default type
				let type = 'text';

				if (
					metadataField.type
					&& typeof metadataField.type !== 'undefined'
				) {
					type = metadataField.type;
				}

				metadata.push({
					type,
					label: metadataField.label,
					value: metadataField.value,
				});
			});
		}
		values.metadata = metadata;

		// set files
		if (this.state.files) {
			values.files = this.state.files;
		}

		// create or update
		if ('_id' in values) {
			itemUpdate(values)
				.then((response) => {
					router.replace(`/items/${values.slug}`);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			itemCreate(values)
				.then((response) => {
					router.replace('/items/');
				})
				.catch((err) => {
					console.error(err);
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
				console.error(err);
			});
	}

	render() {
		const { files } = this.state;

		let item;

		if (
			this.props.itemQuery
			&& this.props.itemQuery.project
		) {
			item = this.props.itemQuery.project.item;
		}

		return (
			<ItemEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				initialValues={item}
				files={files}
				addMetadata={this.addMetadata}
				removeMetadata={this.removeMetadata}
			/>
		);
	}
}

export default compose(
	itemCreateMutation, itemUpdateMutation, itemRemoveMutation, itemDetailQuery,
	itemListQuery,
)(ItemEditorContainer);
