import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function SignIn() {
  return (
    <>
      <Header />
      <div>
        <button className='button-login-register'>Sign in</button> {/* Link to Auth0? */}
        <button className='button-login-register'><Link to='/register'>Register</Link></button>
      </div>
    </>
  )
}

export default SignIn
