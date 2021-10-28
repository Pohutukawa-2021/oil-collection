// import React, { useEffect, useState } from 'react'
// import { Redirect } from 'react-router-dom'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import Nav from './Nav'
// import { connect } from 'react-redux'
// import { editDetails } from '../actions/clients'
// import { fetchClients } from '../api/admin'

// function AdminListOfClients () {
//   const [clients, setClients] = useState([])

//   // useEffect(() => {
//   //   fetchClients()
//   //     .then((clients) => {
//   //       setClients(clients)
//   //       console.log(clients)
//   //       return null
//   //     })
//   //     .catch((error) => { console.error(error.message) })
//   // }, [])

//   // const [activeOrder, setActiveOrder] = useState({
//   //   orderActive: clients.orderActive
//   // })

//   // function handleDoneClick () {
//   //   const client = {
//   //     auth0Id: clients.auth0Id,
//   //     token: clients.token,
//   //     email: clients.email,
//   //     orderActive: 0
//   //   }
//   //   clients.dispatch(editDetails(client))
//   //   setActiveOrder({ orderActive: 0 })
//   // }

//   return (
//     <>
//       <Nav/>
//       <div>
//         <IfAuthenticated>

//           {clients.map(client => {
//             return (
//               <>
//                 <table>
//                   <tbody>
//                     <tr>
//                       <th>Date</th>
//                       <th>Business Name</th>
//                       <th>Business Street Address</th>
//                       <th>Business Suburb</th>
//                       <th>Business City</th>
//                       <th>Type of Container</th>
//                     </tr>
//                     <tr>
//                       <td>{client.order_timestamp}</td>
//                       <td>{client.business_name}</td>
//                       <td>{client.address_street}</td>
//                       <td>{client.address_suburb}</td>
//                       <td>{client.address_city}</td>
//                       <td>{client.containers}</td>
//                     </tr>

//                   </tbody>
//                 </table>
//                 <button
//                   value={client.orderActive}
//                   // onClick={handleDoneClick}
//                 >Done</button>
//               </>
//             )
//           })}

//         </IfAuthenticated>
//         <IfNotAuthenticated>
//           {/* <Redirect to={{ pathname: '/sign-in', state: { from: client.location } }}/> */}
//         </IfNotAuthenticated>
//       </div>
//     </>
//   )
// }

// // function mapStateToProps (state) {
// //   return {
// //     client: state
// //   }
// // }

// export default AdminListOfClients
