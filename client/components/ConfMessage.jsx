import React from 'react'
import { Redirect } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function ConfMessage (props) {
  return (
    <>
      <div>
        <IfAuthenticated>
          <p>Collection Confirmed!</p>
          <p>Order completed at: {Date().toLocaleString()}</p>
          <p>Your collection will be picked up within 48 hours.</p>

          <p>If you have any questions please call 0800 009 008.</p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }}/>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default ConfMessage
