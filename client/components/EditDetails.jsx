import React from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateDetails } from '../actions/clients'
import Form from './Form'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function EditDetails (props) {
  const history = useHistory()

  function handleClick (form) {
    const client = {
      ...form,
      auth0Id: props.client.auth0Id,
      token: props.client.token,
      email: props.client.email
    }
    props.dispatch(updateDetails(client))
    history.push('/')
  }

  return (
    <>
      <IfAuthenticated>
        <Form submitForm={handleClick} formData={props.client}/>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }}/>
      </IfNotAuthenticated>
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(EditDetails)
