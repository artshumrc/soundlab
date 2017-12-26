import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';

import ItemList from '../../components/ItemList';
import itemsQuery from '../../graphql/queries/list';


class ItemListContainer extends React.Component {
	render() {
		let items = [];

		if (
			this.props.itemListQuery
			&& !this.props.itemListQuery.loading
			&& this.props.itemListQuery.project
		) {
			items = this.props.itemListQuery.project.items;
		}

		console.log('############');
		console.log('############');
		console.log('############');
		console.log(this.props);

		console.log('############');
		console.log('############');
		return (
			<ItemList
				items={items}
			/>
		);
	}
}

export default compose(
	itemsQuery,
)(ItemListContainer);
