import React from 'react'

function Register () {
  return (
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
            placeholder="A minimun of 6 characters"
          />
        </label>
        <button>Login</button>
        <button>Register</button>
      </form>

    </div>
  )
}

export default Register
