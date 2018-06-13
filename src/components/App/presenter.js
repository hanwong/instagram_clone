import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import './styles.scss'
import Footer from 'components/Footer'
import Auth from 'components/Auth'

const App = props => [
  // Nav
  props.isLoggedin ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,
  <Footer key={3} />
]

App.PropTypes = {
  isLoggedin: PropTypes.bool.isRequired
}

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => 'feed'} />
    <Route exact path="/explore" render={() => 'explore'} />
  </Switch>

)

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/forgot" render={() => 'passward'} />
  </Switch>

)

export default App