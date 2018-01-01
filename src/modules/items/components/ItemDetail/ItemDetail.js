import React from 'react';
import Tags from '../../../tags/components/Tags';
import ItemImageViewer from '../ItemImageViewer';
import ItemTitle from '../ItemTitle';
import ItemDescription from '../ItemDescription';
import ItemMetaFields from '../ItemMetaFields';
import ItemCollection from '../ItemCollection';
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

			{files ?
				<ItemImageViewer
					itemMiradorLink={`/items/${_id}/${slug}/mirador`}
					files={files}
				/>
			: ''}

			<div className="itemDetailColumn">
				<ItemTitle
					title={title}
					editLink={userIsAdmin ? `/items/${_id}/${slug}/edit` : null}
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
