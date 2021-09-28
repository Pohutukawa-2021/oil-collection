import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerDetails } from '../actions/clients'

import Form from './Form'

function Register (props) {
  const history = useHistory()

  function handleClick (form) {
    const client = {
      ...form,
      auth0Id: props.client.auth0Id,
      token: props.client.token,
      email: props.client.email
    }
    props.dispatch(registerDetails(client))
    history.push('/')
    // Auth0 stuff goes here? --James
  }
  return (
    <Form submitForm={handleClick} formData={props.client}/>
  )
}

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(Register)
