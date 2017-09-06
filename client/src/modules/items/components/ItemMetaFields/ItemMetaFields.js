import React from 'react';
import ItemMetaField from '../ItemMetaField';
import './ItemMetaFields.css';


const ItemMetaFields = props => (
	<div className="itemMetaFields">
		{props.metaFields.map(metaField => (
			<ItemMetaField
				key={metaField.label}
				{...metaField}
			/>
		))}
	</div>
);

export default ItemMetaFields;
