import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const backgroundImage = {
  backgroundImage: 'url("../Oil-Collection.png")'
}

function Nav (props) {
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin (event) {
    event.preventDefault()
    login()
  }

  function handleLogoff (event) {
    event.preventDefault()
    logout()
  }

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  return (
    <nav className='nav'>
      <Link className='logo-link' to="/"><div className='logo' style={backgroundImage}></div></Link>
      <section className='nav-item'>
        <IfAuthenticated>
          <i>Hello, {props.user.firstName}</i>
          <section className='sign'>
            <a href='/' onClick={handleLogoff} className='nav__link'>Log out</a>
          </section>
        </IfAuthenticated>
        <IfNotAuthenticated>
          {/* <section className='nav-item'> */}
          <p>Hello, guest</p>
          <section className='sign'>
            <a href='/' onClick={handleLogin} className='nav__link'>Sign in</a>
            <a href='/' onClick={handleRegister} className='nav__link'>Register</a>
          </section>
          {/* </section> */}
        </IfNotAuthenticated>
      </section>
    </nav >
  )
}

function mapStateToProps (state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(Nav)
