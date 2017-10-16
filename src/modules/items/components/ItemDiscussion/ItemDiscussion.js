import React from 'react';
import ItemDiscussionReply from './ItemDiscussionReply';

import './ItemDiscussion.css';

const ItemDiscussion = props => (
  <div>
    <div className="itemDiscussion">
      <div className="discussionTitleContainer">
        <span className="discussionTitle">Discussion</span>
      </div>
      <div className="itemDiscussionMeta">
        <span className="itemDiscussionAuthor">Janet Kuda</span>
        <span className="itemDiscussionDate">Jul 17, 2017</span>
      </div>
      <div className="itemDiscussionContentContainer">
        <p className="itemDiscussionContent">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="itemDiscussionReplyButtonContainer">
        <span className="itemDiscussionReplyButton">Reply</span>
      </div>

    </div>

    <ItemDiscussionReply />
  </div>

);

export default ItemDiscussion;
