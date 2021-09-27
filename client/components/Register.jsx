import React, { useState } from 'react'

function Register () {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    addressStreet: '',
    suburb: '',
    city: '',
    product: null
    // username: '',
    // password: ''
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
    // Auth0 stuff goes here? --James
  }
  return (
    <div>
      <form>
        <div className="form-background">
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
            <label htmlFor='product' className='form-label'>Oil</label>
            <input
              className='form-input'
              type='radio'
              id='product'
              name='product'
              value='oil'
              //   value={form.product}
              onChange={handleChange}
            ></input>
            <label htmlFor='product' className='form-label'>Fat</label>
            <input
              className='form-input'
              type='radio'
              id='product'
              name='product'
              value='fat'
              //   value={form.product}
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
          <div className="field">
            <label htmlFor='username' className='form-label'>Username:</label>
            <input
              className='form-input'
              id='username'
              name='username'
              value={form.username}
              onChange={handleChange}
              placeholder="example@email.com"
            ></input>
          </div>
          <div className="field">
            <label htmlFor='password' className='form-label'>Password:</label>
            <input
              className='form-input'
              id='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder="minimun 6 letters/characters"
            ></input>
          </div>
        </div>
        <button type='button' className='button-login-register' onClick={handleClick}>Register</button>
      </form>
    </div>
  )
}

export default Register
