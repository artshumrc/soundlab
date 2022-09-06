import React from 'react'
import { compose } from 'react-apollo';

import PlaylistList from '../../components/PlaylistList';
import { playlistListQuery } from '../../graphql/queries/playlists';


const PlaylistListContainer = props => (
	<PlaylistList
		playlists={props.playlists}
	/>
);


export default compose(
	playlistListQuery,
)(PlaylistListContainer);
