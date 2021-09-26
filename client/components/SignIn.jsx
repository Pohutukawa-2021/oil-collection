import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function SignIn() {
  return (
    <>
      <Header />
      <div>
        <button className='bold'>Sign in</button> {/* Link to Auth0? */}
        <button className='bold'><Link to='/register'>Register</Link></button>
      </div>
    </>
  )
}

export default SignIn
