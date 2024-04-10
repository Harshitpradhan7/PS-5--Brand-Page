import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='container'>
        <div>
          <img src="images/Logo.jpg" alt="Logo" id='Logo' />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>

      </nav>
    </div>
  )
}

export default Navbar
