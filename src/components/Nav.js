import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='Nav'>
        <ul className='Nav-list'>
            <li className='Nav-item'><Link to='/'>Home</Link></li>
            <li className='Nav-item'><Link to='#'>Albums</Link></li>
            <li className='Nav-item'><Link to='#'>About</Link></li>
            <li className='Nav-item'>
                <form className='Nav-search'>
                    <input name='search-input' type='text' value='Search'/>
                    <button name='search-submit'>Send</button>
                </form>
            </li>
        </ul>
    </nav>
  )
}
