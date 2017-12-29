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
			&& this.props.itemListQuery.project
		) {
			items = this.props.itemListQuery.project.items;
		}

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
