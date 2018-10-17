import React from 'react';
import { Link, withRouter } from 'react-router';

import './SearchTags.css';

const SearchTags = ({ tags, router }) => (
	<div className="searchTags">
		{tags.map(tag => {
			let tagParams = [];
			const query = {
				...router.location.query,
				page: 1,
			};
			if (router.location.query.tags) {
				tagParams = router.location.query.tags.split(',');
			}

			const isActive = tagParams.indexOf(tag) >= 0;

			if (isActive) {
				tagParams.splice(tagParams.indexOf(tag), 1);
			} else {
				tagParams.push(tag);
			}

			if (tagParams.length) {
				query.tags = tagParams.join(',');
			} else {
				delete query.tags;
			}

			return (
				<Link
					className={`
            tag searchTag
            ${isActive ? 'searchTagActive' : ''}
          `}
					key={tag}
					to={{
      			pathname: '/search',
						query,
      		}}
      	>
					{tag}
				</Link>
			);
		})}

	</div>
);


export default withRouter(SearchTags);
