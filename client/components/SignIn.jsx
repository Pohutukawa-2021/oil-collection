import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function SignIn () {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick () {
    // const { username, password } = forms
  }
  return (
    <>
      <Header />

      <div>

        <form>
          <label htmlFor="userName">
            <h2>user name</h2>
            <input
              value={form.username}
              type="text"
              id='username'
              name='username'
              placeholder="example@email.com"
              label='Email address'
              changeHandler={handleChange}

            />
          </label>
          <label htmlFor="password">
            <h2>password</h2>
            <input
              value={form.password}
              type="text"
              id='password'
              name='password'
              placeholder="your password"
              label='Password'
              changeHandler={handleChange}
            />
          </label>
          <button onClick={handleClick}>Login</button>
          <button><Link to='/register'>Register</Link></button>
        </form>

      </div>
    </>
  )
}

export default SignIn
