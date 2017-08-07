import React from 'react';
import Tags from '../../tags/Tags';
import ItemImageViewer from '../ItemImageViewer';
import ItemTitle from '../ItemTitle';
import ItemDescription from '../ItemDescription';
import ItemMetaFields from '../ItemMetaFields';
import ItemCollection from '../ItemCollection';
import ItemProject from '../ItemProject';

import './ItemDetail.css';

const ItemDetail = props => (
	<div className="itemDetail">
		<div className='itemDetailColumn'>
			<ItemImageViewer
				title="Example Item"
			/>
			<ItemTitle />
			<ItemDescription />
			<Tags
				tags={[
				'Example Tag', 'Manuscripts', 'Psalters', 'Illuminated Manuscripts',
				]}
			/>
			<ItemMetaFields
				metaFields={[{
					label: 'Date',
					value: '1400',
				}, {
					label: 'Creator',
					value: 'P. Vergilius Maro',
				}, {
					label: 'Country of origin',
					value: 'Italy',
				}, {
					label: 'Type',
					value: 'Manuscript',
				}, {
					label: 'Material',
					value: 'Bound vellum with leather.',
				}, {
					label: 'Notes',
					value: 'Illumination on r17, v29, r30, v30.',
				}]}
			/>
		</div>
		<ItemCollection />
		<ItemProject />
	</div>
);


export default ItemDetail;
