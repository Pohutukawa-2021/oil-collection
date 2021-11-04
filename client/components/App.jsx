import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Header from './Header'
import EditDetails from './EditDetails'
import Register from './Register'
import { cacheUser } from '../auth0-utils'
import Home from './Home'
import SignIn from './SignIn'
import ConfMessage from './ConfMessage'
import Footer from './Footer'
import AdminDashboard from './AdminDashboard'

export default function App () {
  cacheUser(useAuth0)
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <main className='app-container light'>
        {/* <Route exact path='/' component={NotNav} /> */}
        <Switch>
          <Route path='/sign-in' component={SignIn} />
          <Route exact path='/' component={Home} />
          <Route path='/details/update' component={EditDetails} />
          <Route path='/confirmation' component={ConfMessage} />
          <Route path='/register' component={Register} />
          <Route path='/admin/dashboard' component={AdminDashboard} />
          <Route render={() => <Redirect to = {{ pathname: '/' }}/>} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}
