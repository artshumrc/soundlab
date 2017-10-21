import React from 'react'
import { compose } from 'react-apollo';

import SoundList from '../../components/SoundList';


const SoundListContainer = props => (
	<SoundList />
);


export default compose(
	soundListQuery,
)(SoundListContainer);
