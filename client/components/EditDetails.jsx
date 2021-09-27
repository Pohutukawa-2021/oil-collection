import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateDetails } from '../actions/clients'
import Form from './Form'

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
    <Form submitForm={handleClick} formData={props.client}/>

  )
}

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(EditDetails)
