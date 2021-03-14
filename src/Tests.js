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
    <div>
      <h2 className='font-bold mb-8'>Ovo su neki podaci sa nekog servera:</h2>
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
