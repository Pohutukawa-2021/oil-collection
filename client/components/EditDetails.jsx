import React, { useState } from 'react'
import { connect } from 'react-redux'

//below not created yet
// import { updateDetails } from '../actions/clients'

export function EditDetails(props) {
  const [form, setForm] = useState({
    //once reducers have been set up then we can use below
    //to get details from global state
    //and delete hardcoded data below
    // ...props.details

    firstName: 'Test',
    lastName: 'Test',
    businessName: 'Test Cafe',
    addressStreet: '123 Test Street',
    addressSuburb: 'Testfield',
    addressCity: 'Testland',
    product: 'Oil',
    containers: 'Drum'

  })

  //below function used for testing only
  // can be deleted once we create and import updateDetails function
  function updateDetails(form) {
    console.log("Sending the following details to '../actions/clients':", form)
    return ({
      type: "",
      form
    })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick(e) {
    e.preventDefault()
    props.dispatch(updateDetails(form))
  }

  return (
    <form>
      <h2>Update your details below</h2>
      <div className="field">
        <label htmlFor='firstName' className='form-label'>First Name:</label>
        <input
          className='form-input'
          id='firstName'
          name='firstName'
          value={form.firstName}
          onChange={handleChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor='lastName' className='form-label'>Last Name:</label>
        <input
          className='form-input'
          id='lastName'
          name='lastName'
          value={form.lastName}
          onChange={handleChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor='businessName' className='form-label'>Business Name:</label>
        <input
          className='form-input'
          id='businessName'
          name='businessName'
          value={form.businessName}
          onChange={handleChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor='addressStreet' className='form-label'>Street Address:</label>
        <input
          className='form-input'
          id='addressStreet'
          name='addressStreet'
          value={form.addressStreet}
          onChange={handleChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor='addressSuburb' className='form-label'>Suburb:</label>
        <input
          className='form-input'
          id='addressSuburb'
          name='addressSuburb'
          value={form.addressSuburb}
          onChange={handleChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor='addressCity' className='form-label'>City:</label>
        <input
          className='form-input'
          id='addressCity'
          name='addressCity'
          value={form.addressCity}
          onChange={handleChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor='product' className='form-label'>Product:</label>
        <input
          className='form-input'
          id='product'
          name='product'
          value={form.product}
          onChange={handleChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor='containers' className='form-label'>Container:</label>
        <input
          className='form-input'
          id='containers'
          name='containers'
          value={form.containers}
          onChange={handleChange}
        ></input>
      </div>
      <button
        type='button'
        className='button-primary'
        onClick={handleClick}
        data-testid='submitButton'
      >
        Save
      </button>
    </form>
  )

}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps)(EditDetails)
