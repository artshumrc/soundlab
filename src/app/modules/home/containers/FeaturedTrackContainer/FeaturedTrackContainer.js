import React from 'react';
import { compose } from 'react-apollo';
import FeaturedTrack from '../../components/FeaturedTrack';
import { featuredTrackQuery } from '../../graphql/queries/featuredTrack';


const FeaturedTrackContainer = props => {
	let track;

	// Ensure array of a single track is passed as a single object
	if (props.tracks && props.tracks.length) {
		track = props.tracks[0];
	}

	return (
		<FeaturedTrack
			track={track}
		/>
	)
};

export default compose(featuredTrackQuery)(FeaturedTrackContainer);
