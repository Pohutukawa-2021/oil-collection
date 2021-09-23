import React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'
import getCustomerDetails from '../api/clients'

function CollectionRequest (props) {
  const { id, businessName, address, city } = props

  function addNewOrder () {
    addOrder(props)
  }

  return (
    <>
      <div>

        <h2>Your Account:</h2>
        <p>{businessName}</p>

        <h2>Your Address:</h2>
        <p>{address}</p>
        <p>{city}</p>

        <h2>for oil collection</h2>
        <button onClick={addNewOrder}>CLICK HERE</button>

      </div>
      <Footer/>
    </>
  )
}

export default CollectionRequest
