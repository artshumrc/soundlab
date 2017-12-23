import React from 'react';

import './ItemDiscussion.css';

const ItemDiscussionReply = props => (
	<div className="itemDiscussionReply">
		<div className="itemDiscussionMeta">
			<span className="itemDiscussionAuthor">Victoria Alexis</span>
			<span className="itemDiscussionDate">Jul 18, 2017</span>
		</div>
		<div className="itemDiscussionContentContainer">
			<p className="itemDiscussionContent">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
		<div className="itemDiscussionReplyButtonContainer">
			<span className="itemDiscussionReplyButton">Reply</span>
		</div>

	</div>
);

export default ItemDiscussionReply;
