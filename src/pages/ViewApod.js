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
    <div>
      <img
        src={apod.url}
        alt={apod.title}
      />
    </div>
  )
}
