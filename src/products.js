import logo from './logo.svg'
import './assets/output.css'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
const products = ['Melem', 'Caj', 'Kapi', 'Med', 'Sir', 'Rakija']

const Products = () => {
  return (
    <div className=' bg-gray-300 text-center font-bold'>
      {products.map((item) => (
        <Link key={item} to={item}>
          <h2>{item}</h2>
        </Link>
      ))}
    </div>
  )
}

export default Products
