import React from 'react'
import Footer from './Footer'

function CollectionRequest (props) {
  const { businessName, address, city } = props
  return (
    <>
      <div>

        <h2>Your Account:</h2>
        <p>{businessName}</p>

        <h2>Your Address:</h2>
        <p>{address}</p>
        <p>{city}</p>

        <h2>for oil collection</h2>
        <button>CLICK HERE</button>

      </div>
      <Footer/>
    </>
  )
}

export default CollectionRequest
