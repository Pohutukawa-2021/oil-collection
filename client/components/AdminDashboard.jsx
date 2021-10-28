import React, { useEffect, useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Nav from './Nav'
import { connect } from 'react-redux'
import { fetchAllClients } from '../actions/admin'

function AdminDashboard (props) {
  useEffect(() => {
    props.dispatch(fetchAllClients())
  }, [])
  // const [clients, setClients] = useState([props.clients])
  const clients = props.clients
  console.log(props.clients)
  // const {
  //   id,
  //   orderTimestamp: order_timestamp,
  //   business_name: businessName,
  //   address_street: addressStreet,
  //   address_suburb: addressSuburb,
  //   address_city: addressCity,
  //   containers,
  //   product,
  //   price
  //  } = clients
  // console.log(clients)
  // const [activeOrder, setActiveOrder] = useState({
  //   orderActive: clients.orderActive
  // })

  // function handleDoneClick () {
  //   const client = {
  //     auth0Id: clients.auth0Id,
  //     token: clients.token,
  //     email: clients.email,
  //     orderActive: 0
  //   }
  //   clients.dispatch(editDetails(client))
  //   setActiveOrder({ orderActive: 0 })
  // }

  return (
    <>
      <Nav/>
      <div className="admin-dashboard">
        <IfAuthenticated>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Business Name</th>
                <th>Business Street Address</th>
                <th>Business Suburb</th>
                <th>Business City</th>
                <th>Type of Container</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {props.clients.map(client => {
                return (
                  <>

                    <tr>

                      <td>{client.order_timestamp}</td>
                      <td>{client.business_name}</td>
                      <td>{client.address_street}</td>
                      <td>{client.address_suburb}</td>
                      <td>{client.address_city}</td>
                      <td>{client.containers}</td>
                      <td>{client.product}</td>
                      <td>{client.price}</td>

                    </tr>

                  </>
                )
              }
              )}
            </tbody>
          </table>

        </IfAuthenticated>
        <IfNotAuthenticated>
          {/* <Redirect to={{ pathname: '/sign-in', state: { from: client.location } }}/> */}
        </IfNotAuthenticated>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    clients: state.admin
  }
}

export default connect(mapStateToProps)(AdminDashboard)
