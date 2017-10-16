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

const DescriptionInput = props => (
	<Textarea
		{...props.input}
		placeholder={props.placeholder}
		className={props.className}
	/>
);

const CollectionEditor = props => {
	return (
		<div className="collectionEditor">
			<form
				onSubmit={props.handleSubmit}
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
					className="collectionDescriptionEdit"
					name="description"
					component={DescriptionInput}
					type="text"
					placeholder="Description of the collection..."
				/>
				<FieldArray
					name="items"
					component={items => (
						<CollectionItemsEditor items={items} />
          )}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default reduxForm({
	form: 'collectionsEditor',
})(CollectionEditor);
