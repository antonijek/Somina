import React from 'react'
import { useState, useEffect } from 'react'
const url = 'https://jsonplaceholder.typicode.com/posts'

const Tests = () => {
  const [text, setText] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((item) => setText(item))
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h2 className='font-bold mb-8 text-blue-100 hover:text-blue-200'>Ovo su neki podaci sa nekog servera:</h2>
      {text.map((item) => (
        <h3 key={item.id}>
          {item.id + ' '}
          {JSON.stringify(item.title)}
        </h3>
      ))}
    </div>
  )
}

export default Tests
