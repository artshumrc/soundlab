import React from 'react';
import { connect } from 'react-redux';

import SoundListItem from '../../../audio/components/SoundListItem';

import './PlaylistSounds.css';


const PlaylistSounds = props => (
	<div className="playlistSounds">
		{props.sounds.map((sound, i) => (
			<SoundListItem
				key={`${sound.id}-${i}`}
				sound={sound}
				index={i}
			/>
		))}
	</div>
);

export default PlaylistSounds;
