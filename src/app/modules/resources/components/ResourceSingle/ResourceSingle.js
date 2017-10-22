import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDisqusThread from 'react-disqus-thread';
import CSSModules from 'react-css-modules';

import PostContent from '../../../posts/components/PostContent';
import styles from '../../../posts/components/post.scss';



@CSSModules(styles, {allowMultiple: true})
class ResourceSingle extends Component {

  handleNewComment(comment) {
    console.log(comment.text)
  }

  render() {
    const { loading } = this.props.data

    if (!loading) {
      const { post_title: title, post_content: content} = this.props.data.post


      return (

          <div styleName="main">

            <div styleName="wrapper">
              <h3 styleName="title">{title}</h3>
              <h6 className={styles.postAuthor}>{this.props.data.post.info_byline.meta_value}</h6>

              <PostContent content={content}/>
              <ReactDisqusThread
                shortname="soundlab-1"
                identifier="soundlab-information"
                title="Information Thread"
                //url="http://localhost:3000/soundlab-information"
                //category_id="123456"
                onNewComment={this.handleNewComment}
              />
            </div>

          </div>

      )
    }

    return <div></div>
  }
}

ResourceSingle.propTypes = {
  data: PropTypes.object
}

export default ResourceSingle;
