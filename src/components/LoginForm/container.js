import React, { Component } from 'react'
import LoginForm from './presenter'
import PropTypes from 'prop-types'

class Container extends Component {
  state = {
    username: '',
    password: ''
  }

  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    usernameLogin: PropTypes.func.isRequired
  }

  _handleInputChange = event => {
    const { target: { name, value } } = event
    this.setState({
      [name]: value
    })
  }
  _handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state
    const { usernameLogin } = this.props
    // redux action 
    usernameLogin(username, password)
  }
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props
    facebookLogin(response.accessToken)
  }

  render () {
    const { username, password } = this.state
    return <LoginForm 
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            handleFacebookLogin={this._handleFacebookLogin}
            usernameValue={username}
            passwordValue={password}
          />
  }
}

export default Container
