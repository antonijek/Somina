import React, { Component } from 'react'
import { useState, useEffect } from 'react'
const Recipes = () => {
  const [top, setTop] = useState(12)

  useEffect(() => {
    setTop(window.pageYOffset)
    console.log('broje je:' + window.pageYOffset)
  }, [])

  return <div className=' container  mx-auto relative'>Recepti...</div>
}

export default Recipes
