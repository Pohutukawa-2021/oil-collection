import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addNewOrder } from '../actions/clients'

function CollectionRequest (props) {
  // const [orderStatus, setOrderStatus] = useState({ activeOrder: false })

  const { auth0Id, businessName, addressStreet, addressCity, product } = props.client

  const history = useHistory()

  function addOrder () {
    props.dispatch(addNewOrder(auth0Id))
    history.push('/confirmation')
  }

  return (
    <>
      <div>

        <h2>Your Account:</h2>
        <p>{businessName}</p>

        <h2>Your Address:</h2>
        <p>{addressStreet}</p>
        <p>{addressCity}</p>

        <h2>for {product} collection</h2>
        <button
          onClick={addOrder}
          className='button-login-register'
        >
          CLICK HERE

        </button>

      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(CollectionRequest)
