import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import CollectionRequest from './CollectionRequest'
import EditDetails from './EditDetails'
import Register from './Register'
import SignIn from './SignIn'

function App () {
  return (
    <div className='app-container'>
      <Route path='/' component={SignIn} />
      {/* <Route path='' component={Register} />
      <Route path='' component={CollectionRequest} />
      <Route path='' component={EditDetails} />
      <Route path='' component={Register} /> */}
    </div>
  )
}

export default connect()(App)
