import React from 'react'
import Form from './Form'

function Register () {
  function handleClick () {
    console.log('hello')
    // Auth0 stuff goes here? --James
  }
  return (
    <Form submitForm={handleClick}/>
  )
}

export default Register
