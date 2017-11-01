import React from 'react';

import SoundListItem from '../../../audio/components/SoundListItem';

import styles from './PlaylistSounds.scss';


const PlaylistSounds = props => (
	<div className={styles.playlistSounds}>
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
