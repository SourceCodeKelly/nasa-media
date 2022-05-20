import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div>
      <Link to='https://images.nasa.gov/' className='Footer-link'>View NASA Images</Link>
      </div>
    </footer>
  )
}
