import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import ItemList from '../../components/ItemList';
import itemListQuery from '../../graphql/queries/list';


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

ItemListContainer.propTypes = {
	itemListQuery: PropTypes.object,
};

export default compose(
	itemListQuery,
)(ItemListContainer);
