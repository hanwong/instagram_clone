import React, { Component } from 'react'
import LoginForm from './presenter'

class Container extends Component {
  state = {
    username: '',
    password: ''
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
    console.log(response)
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
