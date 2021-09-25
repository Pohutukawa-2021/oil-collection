import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateDetails } from '../actions/clients'

function EditDetails (props) {
  const {
    id,
    firstName,
    lastName,
    businessName,
    addressStreet,
    addressSuburb,
    addressCity,
    product,
    containers
  } = props.client

  const [form, setForm] = useState({
    id,
    firstName,
    lastName,
    businessName,
    addressStreet,
    addressSuburb,
    addressCity,
    product,
    containers
  })

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick (e) {
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
          placeholder='First Name'
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
          placeholder='Last Name'
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
          placeholder='Business Name'
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
          placeholder='Street Address'
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
          placeholder='Suburb'
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
          placeholder='Town/City'
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
          placeholder='Product'
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
          placeholder='Container'
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

function mapStateToProps (state) {
  return {
    client: state
  }
}

export default connect(mapStateToProps)(EditDetails)
