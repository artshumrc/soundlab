import React from 'react';
import {Button, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import './ArticlePreview.css';

export default class ArticlePreview extends React.Component {
	render() {
		const articleData = this.props.articleData;
		const style = {backgroundImage: `url('/images/${this.props.articleData.image}')`};
		return (
			<Col lg={4}>
				<div id="articlePreview">
					<div className="image" style={style} />
					<div className="article">
						<h3>{articleData.title}</h3>
						<div className="articleData">
							<div className="detail">
								<FontAwesome name="clock-o" /> 1 week ago
              </div>
							<div className="detail">
								<FontAwesome name="comments" /> {articleData.comments} comments
              </div>
							<div className="detail">
								<FontAwesome name="list" /> {articleData.category}
							</div>
						</div>
						<p>
              In languages that employ articles, every common noun, with some exceptions, is expressed with definiteness (e.g., definite or indefinite)
            </p>
						<Button>more</Button>
					</div>
				</div>
			</Col>
		);
	}
}
ArticlePreview.propTypes = {
	articleData: PropTypes.shape({
		image: PropTypes.string,
		comments: PropTypes.comments
	}).isRequired
};
