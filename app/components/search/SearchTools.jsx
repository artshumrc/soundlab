import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styles from './search.scss'
import RaisedButton from 'material-ui/RaisedButton'



class SearchTools extends Component{


  render() {

    return(

      <div>

      <RaisedButton
          label="Being"
          onClick={this.props.filterBeing.bind(this)}
        />
      <RaisedButton
          label="Time"
          onClick={this.props.filterTime.bind(this)}
        />


      </div>

    )
  }
}

export default SearchTools
