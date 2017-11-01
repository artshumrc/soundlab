import React from 'react'
import { compose } from 'react-apollo';

import PlaylistSingle from '../../components/PlaylistSingle';
import { playlistSingleQuery } from '../../graphql/queries/playlists';


const PlaylistSingleContainer = props => (
	<PlaylistSingle
		playlist={props.playlist}
	/>
);


export default compose(
	playlistSingleQuery,
)(PlaylistSingleContainer);
