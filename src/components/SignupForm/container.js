import React, { Component } from 'react'
import SignupForm from './presenter'

class Container extends Component {
  state = {
    email: '',
    fullname: '',
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

  render () {
    const { email, fullname, username, password } = this.state
    return <SignupForm
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
            emailValue={email}
            fullnameValue={fullname}
            usernameValue={username}
            passwordValue={password}
           />
  }
}

export default Container
