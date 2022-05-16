import React, {useEffect, useState} from 'react'

export default function ViewApod(props) {
  const [apod, setApod] = useState(null) 
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`

  useEffect(() => {
    async function getApod(){
      const res = await fetch(url)
      const data = await res.json()
      setApod(data)
    } 
    getApod()
  }, [])

  if (!apod) return <h3>Loading...</h3>

  return (
    <div className='ViewApod'>
      <img className='ViewApod-img'
        src={apod.url}
        alt={apod.title}
      />
      <div className='ViewApod-info'>
        <p><span>{apod.url}</span></p>
        <h1>{apod.title}</h1>
        <p>{apod.date}</p>
        <p>{apod.explanation}</p>
        <p>Copyright: {apod.copyright}</p>
      </div>
    </div>
  )
}
