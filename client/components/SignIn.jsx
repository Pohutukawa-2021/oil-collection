import React from 'react'

import Header from './Header'

function SingIn () {
  return (
    <>
      <Header />

      <div>

        <form>
          <label htmlFor="userName">
            <h2>user</h2>
            <input
              type="text"
              id='user'
              name='user'
              placeholder="example@email.com"

            />
          </label>
          <label htmlFor="password">
            <h2>password</h2>
            <input
              type="text"
              id='password'
              name='password'
              placeholder="your password"
            />
          </label>
          <button>Login</button>
          <button>Register</button>
        </form>

      </div>
    </>
  )
}

export default SingIn
