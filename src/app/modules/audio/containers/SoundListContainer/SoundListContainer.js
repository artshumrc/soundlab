import React from 'react'
import { compose } from 'react-apollo';

import SoundList from '../../components/SoundList';
import { soundListQuery } from '../../graphql/queries/sounds';


const SoundListContainer = props => (
	<SoundList />
);


export default compose(
	soundListQuery,
)(SoundListContainer);
