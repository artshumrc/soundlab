import React from 'react';

import CollectionCover from '../../../collections/components/CollectionCover';
import Pagination from '../../../../components/pagination/Pagination';
import ArticleListContainer from '../../containers/ArticleListContainer';

import './ArticleListPage.css';


const ArticleListPage = props => (
	<div >
		<CollectionCover
			title="Articles"
			coverLink={props.userIsAdmin ? '/articles/create' : null}
			coverLinkText={props.userIsAdmin ? 'Create new' : null}
		/>
		<ArticleListContainer />
		<Pagination
			total={0}
			limit={18}
		/>
	</div>
);


export default ArticleListPage;
