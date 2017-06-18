import React, {Component, PropTypes} from 'react'
import { gql, graphql } from 'react-apollo'
import PostContent from '../posts/PostContent.js'
import Sidenav from '../shared/sidenav'
import CSSModules from 'react-css-modules'
import styles from '../posts/post.scss'


@CSSModules(styles, {allowMultiple: true})
class AudioUploadSingle extends Component {

  render() {
    const { loading } = this.props.data

    if (!loading) {
      const { post_title: title, post_content: content} = this.props.data.post


      return (

          <div styleName="main">
            <Sidenav />
            <div styleName="wrapper">
              <h1 styleName="title">{title}</h1>
              <PostContent content={content}/>
            </div>
          </div>

      )
    }

    return <div></div>
  }
}

AudioUploadSingle.propTypes = {
  data: PropTypes.object
}

const AudioUploadSingleQuery = gql`
  query getPost($post: String){
    post(name:$post){
      id
      post_title
      post_name
      post_content

    },

  }
`

const AudioUploadSingleWithData = graphql(AudioUploadSingleQuery, {
  options: ({params}) => ({
    variables: {
      post: params.post
    }
  })
})(AudioUploadSingle)

export default AudioUploadSingleWithData
