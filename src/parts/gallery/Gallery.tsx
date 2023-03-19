import React from 'react'

import spaceImg from '../../../static/space.webp'
import space2Img from '../../../static/space2.jpg'

import './gallery.sass'

export default function Gallery() {
  return (
    <div className='main-part' id='gallery-container'>
      <img src={spaceImg} />
      <img src={space2Img} />
    </div>
  )
}
