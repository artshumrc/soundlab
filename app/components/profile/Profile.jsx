import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactDOM from 'react-dom'
import styles from './profile.scss'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CSSModules from 'react-css-modules'


@CSSModules(styles, {allowMultiple: true})
class Profile extends Component{

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      id:42,
      email: ''
    }
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleSave() {
    const userId = this.state.id
    const display_name = this.state.name
    const user_email = this.state.email


    this.props.mutate({variables: {userId, display_name, user_email}})

  }
  handleShow() {
    console.log(this.props.data)
    console.log(this.props.data.user)
    console.log(this.props.data.user.ID)

  }

  render() {

    return(
      <MuiThemeProvider>
        <div styleName="profileWrapper">
          <TextField
            fullWidth={true}
            floatingLabelText="Username"
            value={this.state.name}
            onChange={this.updateName.bind(this)}
          />
          <TextField
            fullWidth={true}
            floatingLabelText="Email"
            value={this.state.email}
            onChange={this.updateEmail.bind(this)}
          />
          <RaisedButton
            label="Save"
            onTouchTap={this.handleSave.bind(this)}
           />
        </div>

      </MuiThemeProvider>

    )
  }
}


const addUserInfo = gql`
  mutation addUserInfo($userId:Int, $display_name:String!, $user_email:String!) {
    addUserInfo(ID: $userId, display_name: $display_name, user_email: $user_email ){

        ID
        display_name
        user_email

    }
  }

`

const ProfileWithMutation = graphql(addUserInfo)(Profile)

export default ProfileWithMutation
