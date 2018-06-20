import React, { Component } from 'react'
import SignupForm from './presenter'
import PropTypes from 'prop-types'

class Container extends Component {
  state = {
    email: '',
    name: '',
    username: '',
    password: ''
  }

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  }
  _handleInputChange = event => {
    const { target: { name, value } } = event
    this.setState({
      [name]: value
    })
  }
  _handleSubmit = event => {
    event.preventDefault()
    const { username, password, email, name } = this.state
    const { createAccount } = this.props
    // redux action 
    createAccount(username, password, email, name)
  }
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props
    facebookLogin(response.accessToken)
  }

  render () {
    const { email, name, username, password } = this.state
    return <SignupForm
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            emailValue={email}
            nameValue={name}
            usernameValue={username}
            passwordValue={password}
           />
  }
}

export default Container
