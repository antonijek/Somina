import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
const Recipes = () => {
  const [top, setTop] = useState(12);

  return (
    <div className=" container  mx-auto relative">
      <Helmet>
        <title>Somina | recepti</title>
      </Helmet>
      <img
        src="../slike/slika1.png"
        className="w-24 rounded-full h-auto"
        alt=""
      />
    </div>
  );
};

export default Recipes;
