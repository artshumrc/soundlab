import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

import CSSModules from 'react-css-modules';

import PostContent from '../posts/PostContent';
import styles from '../posts/post.scss';


@CSSModules(styles, {allowMultiple: true})
class Sound extends Component {

  render() {
    const { loading } = this.props.data

    if (!loading) {
      const { post_title: title, post_content: content} = this.props.data.post

      return (

          <div styleName="main">
            <div styleName="wrapper">
              <img src={this.props.data.post.thumbnail} alt=""/>
              <h1 styleName="title">{title}</h1>
              <h6>{this.props.data.post.byline.meta_value}</h6>
              <h6>{this.props.data.post.date.meta_value}</h6>
              <h6>{this.props.data.post.external_link.meta_value}</h6>
              <PostContent content={content}/>

            </div>

          </div>

      )
    }

    return <div></div>
  }
}

Sound.propTypes = {
  data: PropTypes.object
}

export default Sound;
