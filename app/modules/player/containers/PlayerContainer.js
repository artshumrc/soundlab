import React from 'react';
import { compose } from 'react-apollo';
import Player from '../components/Player/Player';
import { tracksQuery } from '../graphql/queries';


const PlayerContainer = props => (
	<Player
		tracks={props.tracks}
	/>
);

export default compose(tracksQuery)(PlayerContainer);
