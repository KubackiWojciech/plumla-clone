import React from 'react'

import './plumlaNGN.sass'

import pingeuinImage from '../../../static/pinguin.png'

export default function PlumlaNGN() {
  return (
    <div className='main-part' id='plumla-ngn-part'>
      <img src={pingeuinImage} alt="plumla-ngn" />
      <div className="description">
        <h1>Plumla-NGN</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam nam voluptate cupiditate ducimus labore dicta ipsa quod nemo. Aspernatur veritatis rerum temporibus accusamus dolorem, minus dolores sapiente. Tempora sapiente illum veniam tempore, sint odio quia ipsa voluptatum repellat illo maiores suscipit veritatis labore dicta aliquam, quo quod ut non.</p>
        <button>Get started</button>
      </div>
    </div>
  )
}
