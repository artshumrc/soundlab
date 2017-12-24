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
		};
	}

	handleSubmit(values) {
		const { collectionCreate, collectionUpdate, router } = this.props;
		const { coverImage } = this.state;

		// remove unused values
		delete values.__typename;

		// set cover image from state
		if (coverImage) {
			values.coverImage = `http://iiif.orphe.us/${coverImage.filename}/full/1600,/0/default.jpg`;
		}


		if ('_id' in values) {
			collectionUpdate(values)
				.then((response) => {
					router.replace('/collections/');
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

	render() {
		let collection;

		if (this.props.collectionQuery && !this.props.collectionQuery.loading) {
			collection = this.props.collectionQuery.collection;
		}

		return (
			<CollectionEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				changeImageValue={this.changeImageValue}
				coverImage={this.state.coverImage}
				collection={collection}
			/>
		);
	}
}

export default compose(
	collectionCreateMutation, collectionUpdateMutation, collectionRemoveMutation,
	collectionDetailQuery,
)(CollectionEditorContainer);
