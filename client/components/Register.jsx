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
        <label htmlFor="firstName">
          <h2>first name</h2>
          <input
            type="text"
            id='firstName'
            name='firstName'
            value={form.firstName}
            onChange={handleChange}
            placeholder="enter name"
          />
        </label>
        <label htmlFor="lastName">
          <h2>last Name</h2>
          <input
            type="text"
            id='lastName'
            name='lastName'
            value={form.lastName}
            onChange={handleChange}
            placeholder="enter last name"
          />
        </label>
        <label htmlFor="businessName">
          <h2>business name</h2>
          <input
            type="text"
            id='businessName'
            name='businessName'
            value={form.businessName}
            onChange={handleChange}
            placeholder="enter business name"
          />
        </label>
        <label htmlFor="businessAdress">
          <h2>business address</h2>
          <input
            type="text"
            id='addressStreet'
            name='addressStreet'
            value={form.addressStreet}
            onChange={handleChange}
            placeholder="enter street address"
          />
          <input
            type="text"
            id='suburb'
            name='suburb'
            value={form.suburb}
            onChange={handleChange}
            placeholder="enter suburb"
          />
          <input
            type="text"
            id='city'
            name='city'
            value={form.city}
            onChange={handleChange}
            placeholder="enter city"
          />
          <select
            type="text"
            id='product'
            name='product'
            onChange={handleChange}
            placeholder="enter product"
          >
            <option value={1}>oil</option>
            <option value={2}>fat</option>
          </select>
        </label>
        <label htmlFor="username">
          <h2>user name</h2>
          <input
            type="text"
            id='username'
            name='username'
            value={form.username}
            onChange={handleChange}
            placeholder="example@email.com"
          />
        </label>
        <label htmlFor="password">
          <h2>password</h2>
          <input
            type="text"
            id='password'
            name='password'
            value={form.password}
            onChange={handleChange}
            placeholder="A minimun of 6 characters"
          />
        </label>
        <button type='button' onClick={handleClick}>Register</button>
      </form>
    </div>
  )
}

export default Register
