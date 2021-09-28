import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { connect } from 'react-redux'

function SignIn (props) {
  const login = getLoginFn(useAuth0)
  // const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin (event) {
    event.preventDefault()
    login()
  }

  // function handleLogoff (event) {
  //   event.preventDefault()
  //   logout()
  // }

  function handleRegister (event) {
    event.preventDefault()
    register()
  }
  return (
    <>
      <IfNotAuthenticated>
        <div>
          <button className='button-login-register' onClick={handleLogin}>Sign in</button> {/* Link to Auth0? */}
          <button className='button-login-register' onClick={handleRegister}>Register</button>
        </div>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
      </IfAuthenticated>
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(SignIn)
