import React from 'react';


import styles from './PlaylistSounds.scss';


const PlaylistSounds = props => (
	<div className={styles.playlistSounds}>
		{props.sounds.map((sound, i) => (
			<SoundListItem
				key={`${track.id}-${i}`}
				sound={sound}
				index={i}
			/>
		))}
	</div>
);

export default PlaylistSounds;
