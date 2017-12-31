import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';
import { arrayMove } from 'react-sortable-hoc';

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

	componentWillReceiveProps(nextProps) {
		if (
			(
				!this.state.files
			|| !this.state.files.length
			)
			&& nextProps.itemQuery
			&& nextProps.itemQuery.project
			&& nextProps.itemQuery.project.item
			&& nextProps.itemQuery.project.item.files
		) {
			this.setState({
				files: nextProps.itemQuery.project.item.files
			});
		}
	}

	handleSubmit(_values) {
		const { itemCreate, itemUpdate, router } = this.props;
		const _files = this.state.files;
		const values = Object.assign({}, _values);

		// remove non-input values
		delete values.__typename;
		delete values.comments;
		delete values.commentsCount;
		delete values.files;

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

		// sanitize files
		const files = [];
		_files.forEach(_file => {
			const file = Object.assign({}, _file);
			delete file.__typename;
			files.push(file);
		});

		// create or update
		if ('_id' in values) {
			itemUpdate(values, files)
				.then((response) => {
					router.replace(`/items/${values._id}/${values.slug}`);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			itemCreate(values, files)
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

	addFile(file) {
		const files = this.state.files.slice();

		files.push(file);
		this.setState({
			files,
		});
	}

	removeFile(index, a, b, c) {
		const files = this.state.files.slice();
		files.splice(index, 1);
		this.setState({
			files,
		});
	}

	onSortEnd({ oldIndex, newIndex }) {
		this.setState({
			files: arrayMove(this.state.files, oldIndex, newIndex),
		});
	}

	updateFile(index, file) {
		const files = this.state.files.slice();

		files[index] = file;

		this.setState({
			files,
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
				addFile={this.addFile}
				removeFile={this.removeFile}
				onSortEnd={this.onSortEnd}
				updateFile={this.updateFile}
			/>
		);
	}
}

export default compose(
	itemCreateMutation, itemUpdateMutation, itemRemoveMutation, itemDetailQuery,
	itemListQuery,
)(ItemEditorContainer);
