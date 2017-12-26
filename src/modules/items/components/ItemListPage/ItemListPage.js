import React from 'react';
import PropTypes from 'prop-types';

import CollectionCover from '../../../collections/components/CollectionCover';
import Pagination from '../../../../components/pagination/Pagination';
import ItemListContainer from '../../containers/ItemListContainer';


import './ItemListPage.css';

const ItemListPage = props => (
	<div >
		<CollectionCover
			title="Items"
			coverLink={props.userIsAdmin ? '/items/create' : null}
			coverLinkText={props.userIsAdmin ? 'Create new' : null}
		/>
		<ItemListContainer />
		<Pagination
			total={props.itemsCount}
			limit={18}
		/>
	</div>
);

ItemListPage.propTypes = {
	userIsAdmin: PropTypes.bool,
	itemsCount: PropTypes.number,
};

ItemListPage.defaultProps = {
	userIsAdmin: false,
	itemsCount: 0,
};

export default ItemListPage;
