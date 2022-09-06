import React from 'react';
import { compose } from 'react-apollo';
import EventList from '../../../event/EventList';
import { eventsUpcomingQuery, eventsPastQuery } from '../../graphql/queries/events';


const EventListContainer = props => (
	<EventList
		itemsUpcoming={props.eventsUpcoming}
		itemsPast={props.eventsPast}
		page_name="events-on-protest"
		withPagination
	/>
);

export default compose(
	eventsUpcomingQuery,
	eventsPastQuery,
)(EventListContainer);
