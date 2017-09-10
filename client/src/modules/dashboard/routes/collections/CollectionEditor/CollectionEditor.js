import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, SubmissionError, reduxForm } from 'redux-form';
import Textarea from 'react-textarea-autosize';
import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { Grid, Row, Col } from 'react-bootstrap';

import CoverImageUploader from '../../../components/ImagesUploader/CoverImageUploader';
import CollectionItemsEditor from './CollectionItemsEditor';

import './CollectionEditor.css';


const TitleInput = props => (
	<Textarea
		{...props.input}
		placeholder={props.placeholder}
		className={props.className}
	/>
);

const AboutInput = props => (
	<Textarea
		{...props.input}
		placeholder={props.placeholder}
		className={props.className}
	/>
);

class CollectionEditor extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	submit(values) {
		this.props.mutate({
			variables: {
				collection: {
					...values
				},
			},
		});
	}

	render() {
		return (
			<div className="collectionEditor">
				<form
					onSubmit={this.submit}
					form="itemEditor"
				>
					<Field
						name="coverImage"
						component={image => (
							<CoverImageUploader
								image={image}
							/>
            )}
					/>
					<Field
						className="collectionTitleEdit"
						name="title"
						component={TitleInput}
						type="text"
						placeholder="Title..."
					/>
					<Field
						className="collectionAboutEdit"
						name="about"
						component={AboutInput}
						type="text"
						placeholder="About the collection..."
					/>
					<FieldArray
						name="items"
						component={items => (
							<CollectionItemsEditor items={items} />
            )}
					/>
				</form>
			</div>
		);
	}
}

const addNewCollection = gql`
	mutation collectionCreate($collection: CollectionCreateInputType!) {
		collectionCreate(collection: $collection) {
			title
		}
	}
`;

const CollectionEditorForm = reduxForm({
	form: 'collectionsEditor',
})(CollectionEditor);

export default graphql(addNewCollection)(CollectionEditorForm);
