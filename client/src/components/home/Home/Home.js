import React from 'react';
import './Home.css';
import Header from '../../navigation/Header';
import Footer from '../../navigation/Footer';
import HomeCover from './sections/HomeCover';
// import AboutSection from './sections/AboutSection';
import ShowcaseCollections from './sections/ShowcaseCollections';
import FeaturesSection from './sections/FeaturesSection';
// import TestimonialSection from './sections/TestimonialSection';
import LifetimeData from './sections/LifetimeData';
import WhyUsSection from './sections/WhyUsSection';
// import BetterExperienceSection from './sections/BetterExperienceSection';
// import PricingSection from './sections/PricingSection';
// import CreateAccountSection from './sections/CreateAccountSection';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<Header />
				<HomeCover />
				<FeaturesSection />
				<ShowcaseCollections />
				<LifetimeData />
				<WhyUsSection />
				<Footer />
			</div>
		);
	}
}

export default Home;
