import React from 'react'
import { connect } from 'react-redux'
import { useHistory, Redirect, Link } from 'react-router-dom'
import { addNewOrder } from '../actions/clients'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Nav from './Nav'
function CollectionRequest (props) {
  // const [orderStatus, setOrderStatus] = useState({ activeOrder: false })

  const { auth0Id, businessName, addressStreet, addressCity, product } = props.client

  const history = useHistory()

  function addOrder () {
    props.dispatch(addNewOrder(auth0Id))
    history.push('/confirmation')
  }
  function handleRedirect (event) {
    event.preventDefault()
  }
  return (
    <>
      <Nav/>
      <IfAuthenticated>
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
          <button
            onClick={handleRedirect}
            className='button-login-register'
          ><Link to='/details/update'>EDIT DETAILS</Link>
          </button>

        </div>
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

export default connect(mapStateToProps)(CollectionRequest)
