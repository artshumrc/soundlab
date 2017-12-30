import React from 'react';

import Tags from '../../../tags/components/Tags';
import ArticleTitle from '../ArticleTitle';
import Discussion from '../../../comments/components/Discussion';
import ArticleTextEditor from '../ArticleTextEditor';

import './ArticleDetail.css';

const ArticleDetail = ({
	_id, title, slug, content, tags, commentsCount, comments,
	userIsAdmin
}) => {

	if (!_id || !content) {
		// TODO: loading or no results
		return null;
	}

	const parsedContent = JSON.parse(content);

	return (
		<div className="articleDetail">
			<div className="articleDetailColumn">
				<ArticleTitle
					title={title}
					slug={slug}
					showEditLink={userIsAdmin}
				/>
				<Tags
					tags={tags}
				/>

				<ArticleTextEditor
					editorState={parsedContent}
					config={{
						read_only: true,
					}}
				/>
			</div>
			<Discussion />
		</div>
	);
}


export default ArticleDetail;
