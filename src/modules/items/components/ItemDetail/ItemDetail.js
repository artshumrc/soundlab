import React from 'react';
import Tags from '../../../tags/components/Tags';
import ItemImageViewer from '../ItemImageViewer';
import ItemTitle from '../ItemTitle';
import ItemDescription from '../ItemDescription';
import ItemMetaFields from '../ItemMetaFields';
import ItemCollection from '../ItemCollection';
import ItemProject from '../ItemProject';
import ItemDiscussion from '../ItemDiscussion/ItemDiscussion.js';

import './ItemDetail.css';

const ItemDetail = ({ _id, title, description, tags, metafields, files })=> {

	if (!_id) {
		// TODO: loading or no results
		return null;
	}

	return (
		<div className="itemDetail">
			<div className="itemDetailColumn">
				<ItemImageViewer
					title={title}
					files={files}
				/>
				<ItemTitle
					title={title}
				/>
				<ItemDescription
					description={description}
				/>
				<Tags
					tags={tags}
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
				<ItemDiscussion />
			</div>

			<ItemCollection />
		</div>
	);
}


export default ItemDetail;
