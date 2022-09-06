import React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

import Calendar from '../../../event/Calendar';
import { calendarQuery } from '../../graphql/queries/events';


const CalendarContainer = props => (
	<Calendar
		{...props}
		withPagination
	/>
);

export default compose(
	calendarQuery,
	withRouter,
)(CalendarContainer);
