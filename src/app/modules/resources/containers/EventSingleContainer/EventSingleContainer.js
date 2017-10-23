import React from 'react'
import { compose } from 'react-apollo';

import EventSingle from '../../components/EventSingle';
import { eventSingleQuery } from '../../graphql/queries/resources';


const EventSingleContainer = props => (
	<EventSingle
		event={props.event}
	/>
);


export default compose(
	eventSingleQuery,
)(EventSingleContainer);
