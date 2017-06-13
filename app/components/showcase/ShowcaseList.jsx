import React, { Component } from 'react'
import styles from './showcase.scss'
import PostContent from '../posts/PostContent.js'


export default class ShowcaseList extends Component{
  static propTypes = {
    post: React.PropTypes.object,
  }

  render() {
    const { post_content: content } = this.props.post
    return(

      <div>

        <h2 className={styles.title}>title: {this.props.post.post_title} </h2>
        <PostContent content={content}/>

      </div>

    )
  }
}
