import React from 'react';
import PropTypes from 'prop-types';
import {Field, FieldArray} from 'redux-form';
import Textarea from 'react-textarea-autosize';

import CoverImageUploader from '../../components/imagesUploader/CoverImageUploader';
import Form from '../../components/Form';
import './CollectionEditor.css';
import Pagination from '../../../../components/pagination/Pagination/Pagination.js';
import CollectionItemsEditor from './CollectionItemsEditor';

export default class CollectionEditor extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log('values LOG', values);
	}

	render() {
		const inputComponent = props => (<input
			{...props.input}
			placeholder={props.placeholder}
			className={props.className}
			autoFocus
		/>);
		const textComponent = props => (<div className="center"><Textarea
			{...props.input}
			placeholder={props.placeholder}
			className={props.className}
		/></div>);
		return (
			<div className="collectionEditor">
				<Form
					onSubmit={this.handleSubmit}
					form="itemEditor"
					initialValues={this.state}
				>
					<Field
						name="coverImage"
						component={image => (
							<CoverImageUploader image={image} />
            )}
					/>

					<Field
						name="title"
						component={inputComponent}
						type="text"
						placeholder="Title..."
						className="collectionTitleEdit"
					/>
					<Field
						name="article"
						component={textComponent}
						type="text"
						placeholder="Article..."
						className="collectionArticleEdit"
					/>
					<FieldArray
						name="items"
						component={items => (
							<CollectionItemsEditor items={items} />
            )}
					/>
					<Pagination
						total={90}
						limit={18}
					/>
				</Form>
			</div>
		);
	}
}
