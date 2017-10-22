import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import CSSModules from 'react-css-modules';

import ShowcaseList from '../../../showcase/components/ShowcaseList';
import PlaylistList from '../../../playlist/components/PlaylistList';
import AudioPlayer from '../../../audio/components/AudioPlayer';
import Cover from '../Cover';
import Intro from '../Intro';
import RecentContainer from '../../containers/RecentContainer';
import LearnContainer from '../../containers/LearnContainer';

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
      </div>
    );
  }
}

export default Home;
