import React from 'react';

import ItemImageViewer from '../ItemImageViewer';
import ItemTitle from '../ItemTitle';
import ItemDescription from '../ItemDescription';
import ItemMetaFields from '../ItemMetaFields';
import ItemCollection from '../ItemCollection';
import ItemProject from '../ItemProject';

import './ItemDetail.css';

const ItemDetail = props => (
	<div className="itemDetail">
		<ItemImageViewer />
		<ItemTitle />
		<ItemDescription />
		<ItemMetaFields />
		<ItemCollection />
		<ItemProject />
	</div>
);


export default ItemDetail;
