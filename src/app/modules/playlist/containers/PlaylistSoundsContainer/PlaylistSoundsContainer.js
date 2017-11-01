import React from 'react'
import { compose } from 'react-apollo';

import PlaylistSounds from '../../components/PlaylistSounds';
import { playlistSoundsQuery } from '../../graphql/queries/playlists';


const PlaylistSoundsContainer = props => (
	<PlaylistSounds
		sounds={props.sounds}
	/>
);


export default compose(
	playlistSoundsQuery,
)(PlaylistSoundsContainer);
