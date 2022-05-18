import React from 'react'
import { Link } from 'react-router-dom'

export default function Apod() {
  return (
    <div className='Apod'>
      <div className='Apod-btn'>
      <Link to={'/nasaapod'} className='Apod-view'>See Into The Stars!</Link>
      </div>
    </div>
  )
}

