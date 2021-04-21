import axios from 'axios';
import React from 'react';
import { Waypoint } from 'react-waypoint';
import { useState, useEffect } from 'react';
const Contact = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [postPerPage, setPostPerPage] = useState(5);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);
  const url = 'http://localhost:3000/quotes';

  const getData = async () => {
    setIsLoading(true);
    const posts = await axios(
      url + '?perPage=' + postPerPage + '&offset=' + page,
    );

    console.log(posts);
    setInfo([...info.concat(posts.data.data)]);
    setIsLoading(false);
  };

  const nextPosts = () => {
    console.log('proba');
    if (check) setPage(page + postPerPage);
    setCheck(true);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="relative">
      {isLoading && <p className="fixed bottom-12 left-1/2">Loading...</p>}
      {info.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.content}</p>
          <img className="w-24 h-24" src={item.filename} alt="" />
        </div>
      ))}

      <Waypoint onEnter={nextPosts} />
    </div>
  );
};

export default Contact;
