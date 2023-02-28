import React from 'react'

import './keyfeatures.sass'

import icon from '../../../static/icon.jpg';

export default function KeyFeatures() {
  return (
    <div className='main-part' id='key-features-part'>
      <img src={icon} alt="icon" />
      <div className="description">
        <h1>Key features</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus inventore eligendi exercitationem voluptate culpa pariatur?</p>
        <h3>Network interfaces:</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <h3>Best in class network performance</h3>
        <ul>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>
    </div>
  )
}
