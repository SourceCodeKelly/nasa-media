import React from 'react'
import { Link } from 'react-router-dom'

export default function Apod() {
  return (
    <div>
      <Link to={'/nasaapod'}>View Astronomy Photo of The Day!</Link>
    </div>
  )
}

