import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CSSModules from 'react-css-modules';

import ShowcaseList from '../../../showcase/components/ShowcaseList';
import Cover from '../Cover';
import Intro from '../Intro';
import RecentContainer from '../../containers/RecentContainer';
import LearnContainer from '../../containers/LearnContainer';
import CalendarContainer from '../../containers/CalendarContainer';

import styles from './Home.scss';

@CSSModules(styles, {allowMultiple: true})
class Home extends React.Component {

  render() {

    return (
      <div>
				<Cover />
        <Intro />
        <LearnContainer />
        <RecentContainer />
        <CalendarContainer />
      </div>
    );
  }
}

export default Home;
