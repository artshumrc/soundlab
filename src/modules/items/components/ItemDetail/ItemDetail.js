import React from 'react';
import Tags from '../../../tags/components/Tags';
import ItemImageViewer from '../ItemImageViewer';
import ItemTitle from '../ItemTitle';
import ItemDescription from '../ItemDescription';
import ItemMetaFields from '../ItemMetaFields';
import ItemCollection from '../ItemCollection';
import ItemProject from '../ItemProject';
import Discussion from '../../../comments/components/Discussion';

import './ItemDetail.css';

const ItemDetail = ({
	_id, title, slug, description, tags, metadata, files, commentsCount, comments,
	userIsAdmin
})=> {

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
					slug={slug}
					showEditLink={userIsAdmin}
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
				<Discussion
					commentsCount={commentsCount}
					comments={comments}
				/>
			</div>

			<ItemCollection />
		</div>
	);
}


export default ItemDetail;
