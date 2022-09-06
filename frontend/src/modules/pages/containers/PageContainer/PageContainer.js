import React from 'react';
import { compose } from 'react-apollo';

import { pageQuery } from '../../graphql/queries/pages';
import Page from '../../components/Page';


const PageContainer = props => (
	<Page {...props} />
);

export default compose(
	pageQuery,
)(PageContainer);
