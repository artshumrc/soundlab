import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import CollectionEditor from '../../components/CollectionEditor';
import getCurrentProjectHostname from '../../../../lib/getCurrentProjectHostname';
import collectionDetailQuery from '../../graphql/queries/detail';
import collectionUpdateMutation from '../../graphql/mutations/update';
import collectionRemoveMutation from '../../graphql/mutations/remove';


class CollectionEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleSubmit(values) {
		const { collectionUpdate, router } = this.props;
		delete values.__typename;
		collectionUpdate(values)
			.then((response) => {
				router.replace('/dashboard/');
			})
			.catch((err) => {
				console.log(err);
			});
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

	render() {
		let collection;

		if (this.props.collectionQuery && !this.props.collectionQuery.loading) {
			collection = this.props.collectionQuery.collection;
		}

		return (
			<CollectionEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				collection={collection}
			/>
		);
	}
}

export default compose(
	collectionUpdateMutation, collectionRemoveMutation, collectionDetailQuery,
)(CollectionEditorContainer);
