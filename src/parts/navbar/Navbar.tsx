import React from 'react'

import './navbar.sass'

const buttons = [
  'Plumla-NGN',
  'Key features',
  'Network use cases',
  'Gallery',
  'Contact'
];

export default function Navbar() {
  return (
    <div id='navbar'>
      <h1>PLUMLA</h1>
      <div id="navbar-buttons">
        {
          buttons.map(x => (
            <button>{x}</button>
          ))
        }
      </div>
    </div>
  )
}
