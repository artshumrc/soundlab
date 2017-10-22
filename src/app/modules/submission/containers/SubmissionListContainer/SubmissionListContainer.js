
import React from 'react'
import { compose } from 'react-apollo';

import SubmissionList from '../../components/SubmissionList';
import { submissionListQuery } from '../../graphql/queries/submissions';


const SubmissionListContainer = props => (
	<SubmissionList />
);


export default compose(
	submissionListQuery,
)(SubmissionListContainer);
