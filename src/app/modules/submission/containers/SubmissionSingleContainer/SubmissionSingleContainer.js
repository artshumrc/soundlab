import React from 'react'
import { compose } from 'react-apollo';

import SubmissionSingle from '../../components/SubmissionSingle';
import { submissionSingleQuery } from '../../graphql/queries/submissions';


const SubmissionSingleContainer = props => (
	<SubmissionSingle />
);


export default compose(
	submissionSingleQuery,
)(SubmissionSingleContainer);
