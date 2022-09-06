import React from 'react';
import { compose } from 'react-apollo';
import Learn from '../../components/Learn';
import { learnQuery } from '../../graphql/queries/learn';


const LearnContainer = props => {
	let event;

	// Ensure array of a single event is passed as a single object
	if (props.events && props.events.length) {
		event = props.events[0];
	}

	return (
		<Learn
			event={event}
		/>
	);
}

export default compose(learnQuery)(LearnContainer);
