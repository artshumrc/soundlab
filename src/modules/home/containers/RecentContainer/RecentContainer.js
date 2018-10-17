import React from 'react';
import { compose } from 'react-apollo';
import Recent from '../../components/Recent';
import { recentQuery } from '../../graphql/queries/recent';


const HomeRecentContainer = props => (
	<Recent
		items={props.items}
	/>
);

export default compose(recentQuery)(HomeRecentContainer);
