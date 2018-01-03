import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import TextEditor from '../../components/TextEditor';
import textDetailQuery from '../../graphql/queries/detail';
import textCreateMutation from '../../graphql/mutations/create';
import textUpdateMutation from '../../graphql/mutations/update';
import textRemoveMutation from '../../graphql/mutations/remove';


class TextEditorContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			coverImage: null,
			selectedItems: [],
		};
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.textQuery
			&& nextProps.textQuery.project
			&& nextProps.textQuery.project.text
		) {
			const text = nextProps.textQuery.project.text;
			this.setState({
				selectedItems: text.items,
			});
		}
	}

	handleSubmit(_values) {
		const values = Object.assign({}, _values);
		const { textCreate, textUpdate, router } = this.props;
		const { coverImage, selectedItems } = this.state;

		let selectedItemIds = [];
		selectedItems.forEach(selectedItem => {
			selectedItemIds.push(selectedItem._id);
		});

		// remove unused values
		delete values.__typename;
		delete values.items;
		delete values.itemSelectorTextsearch;
		delete values.itemsCount;

		// set cover image from state
		if (coverImage) {
			values.coverImage = coverImage.name;
		}

		// create or update
		if ('_id' in values) {
			textUpdate(values, selectedItemIds)
				.then((response) => {
					router.replace(`/texts/${values._id}/${values.slug}`);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			textCreate(values, selectedItemIds)
				.then((response) => {
					router.replace('/texts/');
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}

	handleRemove(textId) {
		const { textRemove, router } = this.props;

		textRemove(textId)
			.then((response) => {
				router.replace('/texts');
			})
			.catch((err) => {
				console.error(err);
			});
	}

	changeImageValue(coverImage) {
		this.setState({
			coverImage
		});
	}

	toggleSelectedItem(item) {
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

		// Get text from query
		let text;
		if (
			this.props.textQuery
			&& this.props.textQuery.project
		) {
			text = this.props.textQuery.project.text;
		}

		// set cover image from state or pre-existing text coverImage
		let coverImage = null;
		if (this.state.coverImage && this.state.coverImage !== null) {
			coverImage = this.state.coverImage;
		} else if (text && text.coverImage) {
			coverImage = {
				path: `//iiif.orphe.us/${text.coverImage}/full/1400,/0/default.jpg`,
			};
		}

		return (
			<TextEditor
				onSubmit={this.handleSubmit}
				onRemove={this.handleRemove}
				changeImageValue={this.changeImageValue}
				coverImage={coverImage}
				initialValues={text}
				selectedItems={selectedItems}
				toggleSelectedItem={this.toggleSelectedItem}
			/>
		);
	}
}

export default compose(
	textCreateMutation, textUpdateMutation, textRemoveMutation,
	textDetailQuery,
)(TextEditorContainer);
