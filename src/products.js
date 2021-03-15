import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
