import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

import PostContent from '../../../posts/components/PostContent'
import '../showcase.css'



export default class ShowcaseList extends Component{
	static propTypes = {
		post: React.PropTypes.object,
	}

	render() {
		const { post_content: content } = this.props.post

		return(

			<div>

				<Card className="listContainer">

					<CardTitle title={this.props.post.post_title} subtitle={this.props.post.byline.meta_value} />

					<CardText>
						<PostContent content={content}/>
					</CardText>

				</Card>

			</div>

		)
	}
}
