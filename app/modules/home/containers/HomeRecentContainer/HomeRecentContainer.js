import React from 'react';
import { compose } from 'react-apollo';
import HomeRecent from '../../components/Home/HomeRecent';
import { homeRecentQuery } from '../../graphql/queries';


const HomeRecentContainer = props => (
	<HomeRecent
		items={props.items}
	/>
);

export default compose(homeRecentQuery)(HomeRecentContainer);
