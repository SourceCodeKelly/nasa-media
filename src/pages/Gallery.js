import React from 'react'

export default function Gallery() {
  return (
    <div className='Gallery'>
        <div className='Gallery-container'>
            <h1>Search for NASA Media</h1>
        <form>
            <input type={'text'} name='search'/>
            <button type='submit' name='search'>Find</button>
        </form>
        </div>
    </div>
  )
}
