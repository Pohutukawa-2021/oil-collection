import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import CollectionRequest from './CollectionRequest'
import EditDetails from './EditDetails'
import Register from './Register'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import SignIn from './SignIn'

function App () {
  cacheUser(useAuth0)

  return (
    <div className='app-container'>
      <Route exact path='/' component={Nav} />
      <Route exact path='/' component={SignIn} />
      <Route path='/details/update' component={EditDetails} />
      {/* <Route path='' component={Register} />
      <Route path='' component={CollectionRequest} />
      <Route path='' component={Register} /> */}
    </div>
  )
}

export default connect()(App)
