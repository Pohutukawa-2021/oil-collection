import React from 'react'
import { connect } from 'react-redux'

import { IfAdmin, IfNotAdmin } from './Admin'
import AdminDashboard from './AdminDashboard'
import CollectionRequest from './CollectionRequest'
import Nav from './Nav'

function Home (props) {
  const { admin } = props.client

  return (
    <>
      <Nav/>
      <IfAdmin admin={admin}>
        <AdminDashboard />
      </IfAdmin>
      <IfNotAdmin admin={admin}>
        <CollectionRequest />
      </IfNotAdmin>
    </>
  )
}

function mapStateToProps (state) {
  return {
    client: state.updateClients
  }
}

export default connect(mapStateToProps)(Home)
