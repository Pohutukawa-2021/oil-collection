import React from 'react'

function ConfMessage (props) {
  return (
    <>
      <div>
        <p>Collection Confirmed!</p>
        <p>Order completed at: {Date().toLocaleString()}</p>
        <p>Your collection will be picked up within 48 hours.</p>

        <p>If you have any questions please call 0800 009 008.</p>
      </div>
    </>
  )
}

export default ConfMessage
