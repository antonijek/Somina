import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
const url = 'http://localhost:3000/quotes';

const Tests = (props) => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postPerPage, setPostPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(100);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await axios(
        url +
          '?perPage=' +
          postPerPage +
          '&offset=' +
          currentPage * postPerPage,
      );
      console.log(posts);
      setPost(posts.data.data);
      setTotalItems(posts.data.itemsTotal);
    };
    fetchData();
    setIsLoading(false);
  }, [postPerPage, currentPage, isLoading]);

  const changeNumOfPosts = (n) => {
    setIsLoading(true);
    setPostPerPage(n);
    setCurrentPage(0);
  };
  const showThePage = (num) => {
    setIsLoading(true);
    setCurrentPage(num - 1);
  };

  const next = (num) => {
    setIsLoading(true);
    if (currentPage < totalItems / postPerPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = (num) => {
    setIsLoading(true);
    setCurrentPage(currentPage - 1);
  };
  if (isLoading) {
    return <div className="text-center mt-48">Loading...</div>;
  }
  return (
    <div className="px-4 container mx-auto ">
      <h2 className="font-bold mb-8">Ovo su podaci sa naseg servera:</h2>
      {post
        /* .slice(
          currentPage * postPerPage,
          currentPage * postPerPage + postPerPage,
        ) */
        .map((item) => (
          <div key={item.id}>
            <h3>
              {item.id + ' '}
              {item.title}
            </h3>
            <img className="w-24 h-24" src={item.filename} alt="bla" />
          </div>
        ))}
      <div className="py-4">
        <Pagination
          next={next}
          prev={prev}
          totalItems={totalItems}
          changeNumOfPosts={changeNumOfPosts}
          showThePage={showThePage}
          post={post}
          currentPage={currentPage}
          postPerPage={postPerPage}
        />
      </div>
    </div>
  );
};

export default Tests;
