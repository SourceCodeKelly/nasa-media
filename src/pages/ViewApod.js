import React, {useEffect, useState} from 'react'

export default function ViewApod(props) {
  const [apod, setApod] = useState(null) 
  const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}`

  useEffect(() => {
    async function getApod(){
      const res = await fetch(URL)
      const data = await res.json()
      setApod(data)
    } 
    getApod()
  }, [])

  if (!apod) return <h3>Loading...</h3>

  return (
    <div className='ViewApod'>
      <div className='ViewApod-image'>
        <img className='ViewApod-img'
          src={apod.url}
          alt={apod.title}
          />
          <p className='ViewApod-href'><span>{apod.url}</span></p>
      </div>
      <div className='ViewApod-info'>
        <h1 className='ViewApod-title'>{apod.title}</h1>
        <p className='ViewApod-date'>{apod.date}</p>
        <p className='ViewApod-explanation'>{apod.explanation}</p>
        <p className='ViewApod-copyright'>Copyright: {apod.copyright}</p>
      </div>
    </div>
  )
}
