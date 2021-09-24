import React, { useState } from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'
// import addOrder from '../api/clients'

function CollectionRequest (props) {
  const [orderStatus, setOrderStatus] = useState({ activeOrder: false })

  // const { businessName, address, city } = props.details

  function addNewOrder () {
    // addOrder(props.details)
    setOrderStatus({ activeOrder: true })
    props.dispatch(addOrder(orderStatus))
  }

  return (
    <>
      <div>

        <h2>Your Account:</h2>
        {/* <p>{businessName}</p> */}

        <h2>Your Address:</h2>
        {/* <p>{address}</p>
        <p>{city}</p> */}

        <h2>for oil collection</h2>
        <button
          onClick={addNewOrder}
          className='button-primary'
        >
          CLICK HERE

        </button>

      </div>
      <Footer/>
    </>
  )
}

function mapStateToProps (state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps)(CollectionRequest)
