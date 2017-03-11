import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App'
import Home from './components/Home'
import Profile from './components/Profile'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Edit from './components/Edit'
import UserStocks from './components/UserStocks'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Home } onEnter={ requireAuth }/>
    <Route path='/home' component={ Home } onEnter={ requireAuth } />
    <Route path='/edit' component={ Edit } />
    <Route path='/profile' component={ Profile } onEnter={ requireAuth } >
      <Route path='/profile/:username' component={ Profile } onEnter={ requireAuth } />
    </Route>
    <Route path='/login' component={ LogIn }/>
    <Route path='/signup' component={ SignUp }/>
    // <Route path='/stock' component={ UserStocks }/>
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) replace({ pathname: '/login' })
}
