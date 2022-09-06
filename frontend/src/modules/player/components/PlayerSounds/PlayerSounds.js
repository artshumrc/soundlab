import React from 'react';
import { connect } from 'react-redux';

import PlayerSoundListItem from '../PlayerSoundListItem';

import './PlayerSounds.css';


const PlaylistSounds = props => (
	<div className="playlistSounds">
		{props.sounds.map((sound, i) => (
			<PlayerSoundListItem
				key={`${sound.id}-${i}`}
				sound={sound}
				index={i}
			/>
		))}
	</div>
);

export default PlaylistSounds;
