import React, {Component, PropTypes} from 'react'
import { gql, graphql } from 'react-apollo'
import PostContent from '../posts/PostContent.js'
import ReactDisqusThread from 'react-disqus-thread'
import CSSModules from 'react-css-modules'
import styles from '../posts/post.scss'



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

const ResourceSingleQuery = gql`
  query getPost($post: String){
    post(name:$post){
      id
      post_title
      post_content
      info_byline {
        meta_value
      }

    },

  }
`

const ResourceSingleWithData = graphql(ResourceSingleQuery, {
  options: ({params}) => ({
    variables: {
      post: params.post
    }
  })
})(ResourceSingle)

export default ResourceSingleWithData
