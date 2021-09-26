import React from 'react'
import { Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Header from './Header'
import CollectionRequest from './CollectionRequest'
import EditDetails from './EditDetails'
import Register from './Register'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import SignIn from './SignIn'
import ConfMessage from './ConfMessage'
import Footer from './Footer'

export default function App () {
  cacheUser(useAuth0)
  return (
    <>
      <Header />
      <main className='app-container'>
        <Route exact path='/' component={Nav} />
        <Route exact path='/' component={CollectionRequest} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/details/update' component={EditDetails} />
        <Route path='/confirmation' component={ConfMessage} />
        <Route path='/register' component={Register} />
      </main>
      <Footer />
    </>
  )
}
