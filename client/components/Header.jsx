import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      {/* <Link className='logo' to="/"><img src="./logo.jpg" alt="logo" /></Link> */}
      <h1><Link className='logo' to="/">Oil Collection</Link></h1>
    </header>
  )
}

export default Header