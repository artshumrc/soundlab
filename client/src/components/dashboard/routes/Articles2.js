import React from 'react';
import './Articles.css';
import {Button, Col, Row} from 'react-bootstrap';
import ArticlePreview from '../components/ArticlePreview';

export default class Articles2 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const data = [
			{
				_id: 'randomId',
				title: 'An article (abbreviated art) is a word that is used',
				image: 'article.png',
				createdAt: new Date(),
				comments: 22,
				category: 'Sculpture',
				description: 'In languages that employ articles, every common noun, with some exceptions, is expressed with  definiteness (e.g., definite or indefinite)'
			},
			{
				_id: 'randomId2',
				title: 'An article (abbreviated art) is a word that is used',
				image: 'article.png',
				createdAt: new Date(),
				comments: 22,
				category: 'Sculpture',
				description: 'In languages that employ articles, every common noun, with some exceptions, is expressed with  definiteness (e.g., definite or indefinite)'
			}
		];

		const withoutRows = data;
		const withRows = [];
		while (withoutRows.length > 0) {
			withRows.push(withoutRows.splice(0, 3));
		}

		return (
			<div id="articles" className="articlesList">
				<div className="topBar">
					<span className="title">Articles</span>
					<div className="pull-right buttonWrapper">
						<Button>Create Article +</Button>
					</div>
				</div>
				<div className="content">
					<h3>All Articles</h3>
					<hr />
					{
            withRows.map(row => <Row>{row.map(article => <ArticlePreview articleData={article} key={article._id} />)}</Row>)
          }
				</div>
			</div>
		);
	}
}
