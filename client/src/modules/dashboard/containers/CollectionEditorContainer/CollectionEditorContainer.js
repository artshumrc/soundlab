import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import CollectionEditor from '../../components/collections/CollectionEditor';

class CollectionEditorContainer extends React.Component {
	handleSubmit(values) {
    this.props.mutate({
			variables: {
				collection: values,
			},
		})
    .then((response) => {
      this.props.router.replace('/dashboard/collections');
    })
    .catch((err) => {
      console.error(err);
    });
	}

	render() {
		return (
		  <CollectionEditor
		    onSubmit={this.handleSubmit.bind(this)}
		  />
		);
	}

}

const addNewCollection = gql`
	mutation collectionCreate($collection: CollectionInputType!) {
		collectionCreate(collection: $collection) {
			title
		}
	}
`;


export default graphql(addNewCollection)(CollectionEditorContainer);
