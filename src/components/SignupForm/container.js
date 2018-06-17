import React, { Component } from 'react'
import SignupForm from './presenter'
import PropTypes from 'prop-types'

class Container extends Component {
  state = {
    email: '',
    fullName: '',
    username: '',
    password: ''
  }

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired
  }

  _handleInputChange = event => {
    const { target: { name, value } } = event
    this.setState({
      [name]: value
    })
  }
  _handleSubmit = event => {
    event.preventDefault()
    // redux action 
  }
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props
    facebookLogin(response.accessToken)
  }

  render () {
    const { email, fullName, username, password } = this.state
    return <SignupForm
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            emailValue={email}
            fullNameValue={fullName}
            usernameValue={username}
            passwordValue={password}
           />
  }
}

export default Container
