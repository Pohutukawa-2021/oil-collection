import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function SignIn () {
  return (
    <>
      <Header />
      <div>
        <button>Sign in</button> {/* Link to Auth0? */}
        <button><Link to='/register'>Register</Link></button>
      </div>
    </>
  )
}

export default SignIn
