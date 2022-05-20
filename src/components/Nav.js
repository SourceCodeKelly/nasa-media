import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='Nav'>
        <ul className='Nav-list'>
            <li className='Nav-item'><Link to='/' className='Nav-link'>Home</Link></li>
            <li className='Nav-item'><Link to='/gallery' className='Nav-link'>Gallery</Link></li>
            <li className='Nav-item'><Link to='/about' className='Nav-link'>Wildfires</Link></li>
        </ul>
    </nav>
  )
}
