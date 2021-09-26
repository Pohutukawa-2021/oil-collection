import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import CollectionRequest from './CollectionRequest'
import SignIn from './SignIn'
import Register from './Register'
import EditDetails from './EditDetails'
import ConfMessage from './ConfMessage'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className='app-container light'>
        <Route exact path='/' component={CollectionRequest} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/details/register' component={Register} />
        <Route path='/details/update' component={EditDetails} />
        <Route path='/confirmation' component={ConfMessage} />
      </main>
      <Footer />
    </>
  )
}