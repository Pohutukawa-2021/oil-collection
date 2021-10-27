import React from 'react'
import { connect } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Form from './Form'
import { registerDetails } from '../actions/clients'

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
    <>
      <IfAuthenticated>
        <Form submitForm={handleClick} formData={props.client} />
      </IfAuthenticated>
      {/* <IfNotAuthenticated>
        <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
      </IfNotAuthenticated> */}
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state.updateClients
  }
}

export default connect(mapStateToProps)(Register)
