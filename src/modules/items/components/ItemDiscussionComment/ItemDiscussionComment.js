import React from 'react';
import PropTypes from 'prop-types';


const ItemDiscussionComment = ({ user, updatedAt, content }) => (
	<div className="itemDiscussion">
		<div className="discussionTitleContainer">
			<span className="discussionTitle">Discussion</span>
		</div>
		<div className="itemDiscussionMeta">
			<span className="itemDiscussionAuthor">{user.name}</span>
			<span className="itemDiscussionDate">{updatedAt}</span>
		</div>
		<div className="itemDiscussionContentContainer">
			<p className="itemDiscussionContent">
				{content}
			</p>
		</div>
		<div className="itemDiscussionReplyButtonContainer">
			<span className="itemDiscussionReplyButton">Reply</span>
		</div>
	</div>
);

ItemDiscussionComment.propTypes = {
	user: PropTypes.object,
	updatedAt: PropTypes.number,
	content: PropTypes.object,
};

export default ItemDiscussionComment;
