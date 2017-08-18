import React from 'react';
import PropTypes from 'prop-types';
import {Field, FieldArray} from 'redux-form';
import Textarea from 'react-textarea-autosize';
import _ from 'underscore';

import CoverImageUploader from '../../components/imagesUploader/CoverImageUploader';
import Form from '../../components/Form';
import './CollectionEditor.css';
import ItemListItem from '../../../items/ItemListItem/ItemListItem';
import Pagination from '../../../../components/pagination/Pagination/Pagination.js';
import AddCollectionItem from './AddCollectionItem';

export default class CollectionEditor extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addItem = this.addItem.bind(this);
		this.state = {
			autocompleteValue: '',
			pickedItems: []
		};
	}

	componentWillMount() {

	}

	handleSubmit() {

	}

	addItem(item) {
		console.log('item LOG', item);
	}

	render() {
		const listItems = [];
		const classes = [];
		const artImages = [3, 16, 19, 22, 31, 34, 35, 38, 42, 43, 44, 47, 48, 58, 70,
			83, 87, 90, 92, 93, 95, 102, 103, 104, 87, 77, 92, 56, 49, 43, 38, 44, 3,
			103, 22, 71, 100, 15, 99, 36, 17, 28, 72, 32, 33, 63, 102, 62, 80, 30, 60];

		_.range(0, 18).map((i) => {
			const selImage = _.sample(artImages);
			listItems.push({
				imageUrl: `//iiif.orphe.us/orpheus/art/${selImage}.jpg/full/400,/0/default.jpg`,
				title: 'Example Item',
				tags: ['Photography', 'Bauhaus', 'De Stijl'],
				slug: 'example-item',
			});
		});

		const pickedItems = listItems.slice(1, 3);

		const inputComponent = props => (<input
			{...props.input}
			placeholder={props.placeholder}
			className={props.className}
			autoFocus
		/>);
		const textComponent = props => (<Textarea
			{...props.input}
			placeholder={props.placeholder}
			className={props.className}
		/>);
		return (
			<div className="collectionEditor">
				<Form
					onSubmit={this.handleSubmit}
					form="itemEditor"
					initialValues={this.state}
				>
					<CoverImageUploader />
					<Field
						name="title"
						component={inputComponent}
						type="text"
						placeholder="Title..."
						className="collectionTitleEdit"
					/>
					<div className="center">
						<Field
							name="article"
							component={textComponent}
							type="text"
							placeholder="Article..."
							className="collectionArticleEdit"
						/>
            
						<div className="itemsList">
							<AddCollectionItem addItem={this.addItem} items={listItems} />
							{pickedItems.map((listItem, i) => (
								<ItemListItem
									key={`${listItem.slug}-${i}`}
									{...listItem}
								/>
              ))}
						</div>
						<Pagination
							total={90}
							limit={18}
						/>
					</div>
				</Form>
			</div>
		);
	}
}
