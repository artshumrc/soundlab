import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './search.css'
import { Row, Col } from 'react-bootstrap'
import SubmissionItem from '../submission/SubmissionItem'
import SoundItem from '../Sound/SoundItem'
import BeingCategory from './BeingCategory'
import TimeCategory from './TimeCategory'
import SearchTools from './SearchTools'
import { toggleTimeCategory, toggleBeingCategory } from '../../actions/searchActions'
import { connect } from 'react-redux'


class Search extends React.Component {

	static propTypes = {
		data: PropTypes.shape({
			loading: React.PropTypes.bool,
			error: React.PropTypes.object,
			posts: React.PropTypes.array,
		}).isRequired,
	}

	filterBeing(e) {
		e.preventDefault()
		this.props.dispatch(toggleBeingCategory())

	}

	filterTime(e) {
		e.preventDefault()
		this.props.dispatch(toggleTimeCategory())

	}

	render() {
		if (this.props.data.loading) {
			return (<div>Loading</div>)
		}

		if (this.props.data.error) {
			console.log(this.props.data.error)
			return (<div>An unexpected error occurred</div>)
		}

		if (this.props.data.posts) {
			return (
				<div>
					<SearchTools
						filterBeing={this.filterBeing.bind(this)}
						filterTime={this.filterTime.bind(this)}
          />
					{this.props.ui.displayTime === true ?
						<TimeCategory />
          : ''}
					{this.props.ui.displayBeing === true ?
						<BeingCategory />
          : ''}
				</div>
			)
		}
	}
}

function mapStateToProps(state){
	return {
		ui: state.ui,
	}
}


const SearchQuery = gql`
  query SearchQuery {
    posts(post_type: ["sound"]) {
      id,
      post_title
      post_name
      post_content
      thumbnail
			post_meta(keys: ["byline", "date", "external_link"]) {
				meta_key
				meta_value
			}
    }
    submission:posts(post_type: ["user_submission") {
      id,
      post_title
      post_name
      post_content
      thumbnail
			post_meta(keys: ["submission_byline", "submission_date", "submission_link"]) {
				meta_key
				meta_value
			}
    }
  }
`

const SearchWithData = graphql(SearchQuery)(Search)

export default connect(mapStateToProps)(SearchWithData)
