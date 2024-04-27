import React from 'react'
import image from './images/image.png'
import './Header.css'

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="nav">
        <img src={image} alt="no iamge" /> <h1>Meme Generator</h1>
      </div>
      <div className="corner">
        <p>React Course- Project 3</p>
      </div>
    </div>
  )
}
