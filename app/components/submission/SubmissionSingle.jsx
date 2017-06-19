import React, {Component, PropTypes} from 'react'
import { gql, graphql } from 'react-apollo'
import PostContent from '../posts/PostContent.js'
import Sidenav from '../shared/sidenav'
import CSSModules from 'react-css-modules'
import styles from '../posts/post.scss'


@CSSModules(styles, {allowMultiple: true})
class SubmissionSingle extends Component {

  render() {
    const { loading } = this.props.data

    if (!loading) {
      const { post_title: title, post_content: content} = this.props.data.post


      return (

          <div styleName="main">
            <Sidenav />
            <div styleName="wrapper">
              <h1 styleName="title">{title}</h1>
              <h6>{this.props.data.post.submission_byline.meta_value}</h6>
              <h6>{this.props.data.post.submission_date.meta_value}</h6>
              <h6>{this.props.data.post.submission_link.meta_value}</h6>
              <PostContent content={content}/>
            </div>
          </div>

      )
    }

    return <div></div>
  }
}

SubmissionSingle.propTypes = {
  data: PropTypes.object
}

const SubmissionSingleQuery = gql`
  query getPost($post: String){
    post(name:$post){
      id
      post_title
      post_content
      submission_byline {
        meta_value
      }
      submission_link {
        meta_value
      }
      submission_date {
        meta_value
      }

    },

  }
`

const SubmissionSingleWithData = graphql(SubmissionSingleQuery, {
  options: ({params}) => ({
    variables: {
      post: params.post
    }
  })
})(SubmissionSingle)

export default SubmissionSingleWithData
