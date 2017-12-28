import React from 'react';
import PropTypes from 'prop-types';

import ItemDiscussionComment from '../ItemDiscussionComment';

import './ItemDiscussion.css';


const ItemDiscussion = ({ comments}) => (
	<div className="itemDiscussion">
		{comments.map(comment => (
			<ItemDiscussionComment
				key={comment._id}
				{...comment}
			/>
		))}
	</div>
);

ItemDiscussion.propTypes = {
	comments: PropTypes.array,
};

ItemDiscussion.defaultProps = {
	comments: [],
};

export default ItemDiscussion;
