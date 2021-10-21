import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Nav from './Nav'
import { connect } from 'react-redux'
import { editDetails } from '../actions/clients'
import { fetchClients } from '../api/clients'

function Requests (props) {
  // useEffect(() => {
  //   props.fetchClients()
  // }, [])
  // console.log(props)
  const [activeOrder, setActiveOrder] = useState({
    orderActive: props.client.orderActive
  })

  function handleDoneClick () {
    const client = {
      auth0Id: props.client.auth0Id,
      token: props.client.token,
      email: props.client.email,
      orderActive: 0
    }
    props.dispatch(editDetails(client))
    setActiveOrder({ orderActive: 0 })
  }

  return (
    <>
      <Nav/>
      <div>
        <IfAuthenticated>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Business Name</th>
                <th>Business Street Address</th>
                <th>Business Suburb</th>
                <th>Business City</th>
                <th>Type of Container</th>
              </tr>
              <tr>
                <td>{props.client.orderTimeStamp}</td>
                <td>{props.client.businessName}</td>
                <td>{props.client.addressStreet}</td>
                <td>{props.client.addressSuburb}</td>
                <td>{props.client.addressCity}</td>
                <td>{props.client.containers}</td>
              </tr>

            </tbody>
          </table>
          <button
            value={activeOrder}
            onClick={handleDoneClick}
          >Done</button>

        </IfAuthenticated>
        <IfNotAuthenticated>
          <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }}/>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(Requests)
