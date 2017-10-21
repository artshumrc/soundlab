import React, {Component, PropTypes} from 'react'
import { gql, graphql } from 'react-apollo'
import PostContent from '../posts/PostContent'
import CSSModules from 'react-css-modules'
import styles from '../posts/post.scss'


@CSSModules(styles, {allowMultiple: true})
class SoundSingle extends Component {

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

SoundSingle.propTypes = {
  data: PropTypes.object
}

const SoundSingleQuery = gql`
  query getPost($post: String){
    post(name:$post){
      id
      post_title
      post_name
      post_content
      thumbnail
      byline {
        meta_value
      }
      date {
        meta_value
      }
      external_link {
        meta_value
      }

    },

  }
`

const SoundSingleWithData = graphql(SoundSingleQuery, {
  options: ({params}) => ({
    variables: {
      post: params.post
    }
  })
})(SoundSingle)

export default SoundSingleWithData
