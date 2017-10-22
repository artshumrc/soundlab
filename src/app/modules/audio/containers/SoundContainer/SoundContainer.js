import React from 'react'
import { compose } from 'react-apollo';

import Sound from '../../components/Sound';
import { soundSingleQuery } from '../../graphql/queries/sounds';


const SoundContainer = props => (
	<Sound />
);


export default compose(
	soundSingleQuery,
)(SoundContainer);
