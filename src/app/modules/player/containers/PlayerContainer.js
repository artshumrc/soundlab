import React from 'react';
import { compose } from 'react-apollo';
import _ from 'underscore';

import Player from '../components/Player/Player';
import { tracksQuery } from '../graphql/queries';


const PlayerContainer = props => {
	let tracks = props.tracks;

	// randomize order of most recent featured tracks
	_.shuffle(tracks);

	return (
		<Player
			tracks={props.tracks}
		/>
	);
};

export default compose(tracksQuery)(PlayerContainer);
