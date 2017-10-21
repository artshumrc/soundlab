import React from 'react'
import { compose } from 'react-apollo';

import Sound from '../../components/Sound';


const SoundContainer = props => (
	<Sound />
);


export default compose(
	soundQuery,
)(SoundContainer);
