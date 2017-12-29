import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import ItemSelectorItemList from '../../components/ItemSelectorItemList';
import itemsQuery from '../../../items/graphql/queries/list';


class ItemSelectorItemListContainer extends React.Component {
	render() {
		let items = [];

		if (
			this.props.itemListQuery
			&& this.props.itemListQuery.project
		) {
			items = this.props.itemListQuery.project.items;
		}

		return (
			<ItemSelectorItemList
				items={items}
				selectedItems={this.props.selectedItems}
				toggleSelectedItem={this.props.toggleSelectedItem}
			/>
		);
	}
}

ItemSelectorItemListContainer.propTypes = {
	selectedItems: PropTypes.array,
	toggleSelectedItem: PropTypes.func,
};

export default compose(
	itemsQuery,
)(ItemSelectorItemListContainer);
