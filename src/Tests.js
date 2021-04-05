import React from 'react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
const url = 'https://jsonplaceholder.typicode.com/posts';

const Tests = () => {
  const [text, setText] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((item) => {
        setText(item);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center mt-48">Loading...</div>;
  }
  return (
    <div className="px-4 container mx-auto ">
      <Helmet>
        <title>Somina | tests</title>
      </Helmet>
      <h2 className="font-bold mb-8">Ovo su podaci sa nekog servera:</h2>
      {text.map((item) => (
        <h3 key={item.id}>
          {item.id + ' '}
          {item.title}
        </h3>
      ))}
    </div>
  );
};

export default Tests;
