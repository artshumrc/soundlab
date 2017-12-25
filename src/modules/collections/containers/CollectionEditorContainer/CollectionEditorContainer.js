import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import CollectionEditor from '../../components/CollectionEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import collectionDetailQuery from '../../graphql/queries/detail';
import collectionCreateMutation from '../../graphql/mutations/create';
import collectionUpdateMutation from '../../graphql/mutations/update';
import collectionRemoveMutation from '../../graphql/mutations/remove';


class CollectionEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			coverImage: null,
			selectedItems: [],
		};
	}

	handleSubmit(values) {
		const { collectionCreate, collectionUpdate, router } = this.props;
		const { coverImage } = this.state;

		// remove unused values
		delete values.__typename;
		delete values.itemsCount;

		// set cover image from state
		if (coverImage) {
			values.coverImage = coverImage.name;
		}

		if ('_id' in values) {
			collectionUpdate(values)
				.then((response) => {
					router.replace(`/collections/${values.slug}`);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			collectionCreate(values)
				.then((response) => {
					router.replace('/collections/');
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	handleRemove(collectionId) {
		const { collectionRemove, router } = this.props;

		collectionRemove(collectionId)
			.then((response) => {
				router.replace('/collections');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	changeImageValue(coverImage) {
		this.setState({
			coverImage
		});
	}

	toggleSelectItem(item) {
		const selectedItems = this.state.selectedItems.slice();

		if (selectedItems.some(selectedItem => selectedItem._id === item._id)) {
			selectedItems.splice(
				selectedItems.findIndex(selectedItem => selectedItem._id === item._id),
				1
			);
		} else {
			selectedItems.push(item);
		}

		this.setState({
			selectedItems,
		});
	}

	render() {
		const { selectedItems } = this.state;
		let collection;

		if (this.props.collectionQuery && !this.props.collectionQuery.loading) {
			collection = this.props.collectionQuery.project.collection;
		}

		let coverImage = null;
		if (this.state.coverImage && this.state.coverImage !== null) {
			coverImage = this.state.coverImage;
		} else if (collection) {
			coverImage = {
				path: `//iiif.orphe.us/${collection.coverImage}/full/1400,/0/default.jpg`,
			};
		}

		return (
			<CollectionEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				changeImageValue={this.changeImageValue}
				coverImage={coverImage}
				collection={collection}
				selectedItems={selectedItems}
				toggleSelectItem={this.toggleSelectItem}
			/>
		);
	}
}

export default compose(
	collectionCreateMutation, collectionUpdateMutation, collectionRemoveMutation,
	collectionDetailQuery,
)(CollectionEditorContainer);
