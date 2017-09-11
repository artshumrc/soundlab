import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ItemEditor from '../../components/items/ItemEditor';

class ItemEditorContainer extends React.Component {
	handleSubmit(values) {
    this.props.mutate({
			variables: {
				item: values,
			},
		})
    .then((response) => {
      this.props.router.replace('/dashboard/items');
    })
    .catch((err) => {
      console.error(err);
    });
	}

	render() {
		return (
		  <ItemEditor
		    onSubmit={this.handleSubmit.bind(this)}
		  />
		);
	}

}

const addNewItem = gql`
	mutation itemCreate($item: ItemInputType!) {
		itemCreate(item: $item) {
			title
		}
	}
`;


export default graphql(addNewItem)(ItemEditorContainer);
