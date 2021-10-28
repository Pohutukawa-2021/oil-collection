import React from 'react'
import { connect } from 'react-redux'
import { useHistory, Redirect, Link } from 'react-router-dom'
import { addNewOrder } from '../actions/clients'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { IfOrderActive, IfNotOrderActive } from './OrderActive'
import { IfAdmin, IfNotAdmin } from './Admin'
import AdminDashboard from './AdminDashboard'
import Nav from './Nav'

function CollectionRequest (props) {
  // const [orderStatus, setOrderStatus] = useState({ activeOrder: false })

  const { auth0Id, businessName, addressStreet, addressCity, addressSuburb, product, orderActive, admin, orderTimeStamp } = props.client

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
      <IfAdmin admin={admin}>
        <AdminDashboard />
      </IfAdmin>
      <IfNotAdmin admin={admin}>
        <IfAuthenticated>
          <div>

            <h2>Your Account:</h2>
            <p>{businessName}</p>

            <h2>Your Address:</h2>
            <p>{addressStreet}</p>
            <p>{addressSuburb}</p>
            <p>{addressCity}</p>

            <h2>{product} collection for {businessName}</h2>
            <IfNotOrderActive orderActive={orderActive}>
              <button
                onClick={addOrder}
                className='button-login-register'
              >
          REQUEST COLLECTION
              </button>
            </IfNotOrderActive>
            <IfOrderActive orderActive={orderActive}>
              <h3>{product} collection has been requested</h3>
              <h3>on {orderTimeStamp}</h3>
            </IfOrderActive>
            <br />
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
      </IfNotAdmin>
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state.updateClients
  }
}

export default connect(mapStateToProps)(CollectionRequest)
