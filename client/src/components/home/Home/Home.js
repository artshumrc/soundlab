import React from 'react';
import './Home.css';
import Header from '../../navigation/Header';
import Footer from '../../navigation/Footer';
import HomeCover from './sections/HomeCover';
import ShowcaseCollections from './sections/ShowcaseCollections';
import FeaturesSection from './sections/FeaturesSection';
import LifetimeData from './sections/LifetimeData';
import PermissionsSection from './sections/PermissionsSection';
import ExploreOrDemo from './sections/ExploreOrDemo';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<Header />
				<HomeCover />
				<FeaturesSection />
				<ShowcaseCollections />
				<LifetimeData />
				<PermissionsSection />
				<ExploreOrDemo />
				<Footer />
			</div>
		);
	}
}

export default Home;
