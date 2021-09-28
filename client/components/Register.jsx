import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Form from './Form'

function Register (props) {
  function handleClick () {
    console.log('hello')
    // Auth0 stuff goes here? --James
  }
  return (
    <>
      <IfAuthenticated>
        <Form submitForm={handleClick}/>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
      </IfNotAuthenticated>
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(Register)
