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

const ItemDetail = ({ _id, title, description, tags, metadata, files })=> {

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
					metafields={metadata}
				/>
				<ItemDiscussion />
			</div>

			<ItemCollection />
		</div>
	);
}


export default ItemDetail;
