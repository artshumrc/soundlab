import React, {Component, PropTypes} from 'react'
import { gql, graphql } from 'react-apollo'
import PostContent from './PostContent.js'
import './post.css'
import {TweenMax} from 'gsap'

class PostSingle extends Component {
	constructor() {
		super()
		this._animatePostIn = this._animatePostIn.bind(this)
	}

	componentDidMount() {
		this._animatePostIn()
	}

	componentDidUpdate() {
		this._animatePostIn()
	}

	_animatePostIn() {
		const post = this._post
		if (post) {
			TweenMax.fromTo(post, 0.5, {
				opacity: 0
			}, {
				opacity: 1
			})
		}
	}

	render() {
		const { loading } = this.props.data

		if (!loading) {
			const { post_title: title, post_content: content, thumbnail } = this.props.data.post
			const bg = {
				backgroundImage: `url("${thumbnail}")`
			}

			return (
				<div ref={(c) => this._post = c} className="base with-header">
					<div className="header" style={bg}>

					</div>
					<div className="main">
						<div className="wrapper">
							<h1 className="title">{title}</h1>
							<PostContent content={content}/>
						</div>
					</div>
				</div>
			)
		}

		return <div></div>
	}
}

PostSingle.propTypes = {
	data: PropTypes.object
}

const PostSingleQuery = gql`
  query getPost($post: String){
    post(name:$post){
      id
      post_title
      post_content
      thumbnail
    },
    settings{
      uploads
      amazonS3
    }
  }
`

const PostSingleWithData = graphql(PostSingleQuery, {
	options: ({params}) => ({
		variables: {
			post: params.post
		}
	})
})(PostSingle)

export default PostSingleWithData
