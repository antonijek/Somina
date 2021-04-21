import { useState, useEffect } from 'react';

import { GrLinkPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
const Pagination = (props) => {
  const [slide, setSlide] = useState(props.lastNum);
  const [firstDots, setFirstDots] = useState('');
  const [secondDots, setSecondDots] = useState('');
  const [thirdDots, setThirdDots] = useState('');
  const [fourthDots, setFourthDots] = useState('');
  const numOfPages = [];
  const pages = Math.ceil(props.totalItems / props.postPerPage);

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  useEffect(() => {
    props.currentPage > 3 ? setFirstDots('...') : setFirstDots('');
    props.currentPage < numOfPages.length - 4
      ? setSecondDots('...')
      : setSecondDots('');
    props.currentPage < 3 ? setThirdDots('...') : setThirdDots('');
    props.currentPage > numOfPages.length - 4
      ? setFourthDots('...')
      : setFourthDots('');
  });

  if (numOfPages.length < 7) {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center">
          {numOfPages.slice(0, numOfPages.length).map((number) => (
            <button
              key={number}
              className={
                number === props.currentPage + 1
                  ? 'w-6 h-10 text-2xl font-bold -mt-1 bg-red-100  hover:bg-red-300 m-1'
                  : 'w-6 h-6 bg-red-100  hover:bg-red-300 m-1'
              }
              onClick={() => props.showThePage(number)}
            >
              {' '}
              {number}
            </button>
          ))}
        </div>
        <div className="text-center">
          <input
            className=""
            type="range"
            value={slide}
            min="1"
            max={props.totalItems}
            onChange={(e) => setSlide(e.target.value)}
          />
          <output className="text-blue-600 font-bold text-xl mx-1">
            {slide}
          </output>
          <input
            onClick={() => {
              props.changeNumOfPosts(slide);
            }}
            type="submit"
            value="OK"
            className="m-1 border rounded-sm px-1"
          />
          <p>Izaberi broj prikaza po strani </p>{' '}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" flex mx-2">
            {numOfPages.slice(0, 2).map((number) => (
              <button
                key={number}
                className={
                  number === props.currentPage + 1
                    ? 'w-6 h-10 text-2xl font-bold -mt-1 bg-red-100  hover:bg-red-300 m-1'
                    : 'w-6 h-6 bg-red-100  hover:bg-red-300 m-1'
                }
                onClick={() => props.showThePage(number)}
              >
                {' '}
                {number}
              </button>
            ))}
            <p>{fourthDots}</p>

            {props.currentPage > 2 &&
            props.currentPage < numOfPages.length - 3 ? (
              <div className="flex">
                <p className="mx-1">{firstDots}</p>
                {numOfPages
                  .slice(props.currentPage - 1, props.currentPage + 2)
                  .map((number) => (
                    <button
                      key={number}
                      className={
                        number === props.currentPage + 1
                          ? 'w-6 h-10 text-2xl font-bold -mt-1 bg-red-100  hover:bg-red-300 m-1'
                          : 'w-6 h-6 bg-red-100  hover:bg-red-300 m-1'
                      }
                      onClick={() => props.showThePage(number)}
                    >
                      {number}
                    </button>
                  ))}
                <p className="mx-1">{secondDots}</p>
              </div>
            ) : null}

            {props.currentPage === 2 ? (
              <div className="flex">
                {numOfPages
                  .slice(props.currentPage, props.currentPage + 2)
                  .map((number) => (
                    <button
                      key={number}
                      className={
                        number === props.currentPage + 1
                          ? 'w-6 h-10 text-2xl font-bold -mt-1 bg-red-100  hover:bg-red-300 m-1'
                          : 'w-6 h-6 bg-red-100  hover:bg-red-300 m-1'
                      }
                      onClick={() => props.showThePage(number)}
                    >
                      {number}
                    </button>
                  ))}
              </div>
            ) : null}

            {props.currentPage === numOfPages.length - 3 ? (
              <div className="flex">
                {numOfPages
                  .slice(props.currentPage - 1, props.currentPage + 1)
                  .map((number) => (
                    <button
                      key={number}
                      className={
                        number === props.currentPage + 1
                          ? 'w-6 h-10 text-2xl font-bold -mt-1 bg-red-100  hover:bg-red-300 m-1'
                          : 'w-6 h-6 bg-red-100  hover:bg-red-300 m-1'
                      }
                      onClick={() => props.showThePage(number)}
                    >
                      {number}
                    </button>
                  ))}
              </div>
            ) : null}
            <p>{thirdDots}</p>
            {numOfPages
              .slice(numOfPages.length - 2, numOfPages.length)
              .map((number) => (
                <button
                  key={number}
                  className={
                    number === props.currentPage + 1
                      ? 'w-6 h-10 text-2xl font-bold -mt-1 bg-red-100  hover:bg-red-300 m-1'
                      : 'w-6 h-6 bg-red-100  hover:bg-red-300 m-1'
                  }
                  onClick={() => props.showThePage(number)}
                >
                  {' '}
                  {number}
                </button>
              ))}
          </div>
        </div>
        <div className="flex justify-center ">
          {props.currentPage > 0 && (
            <button
              onClick={props.prev}
              className="flex bg-red-100 hover:bg-red-300 p-2"
            >
              {' '}
              {<GrLinkPrevious size={24} />}
              <p className="">Previous</p>
            </button>
          )}
          {props.currentPage < pages - 1 && (
            <button
              onClick={props.next}
              className="flex bg-red-100  hover:bg-red-300 p-2 ml-4"
            >
              <p className="">Next </p>
              {<GrLinkNext size={24} />}
            </button>
          )}
        </div>

        <div className="text-center">
          <input
            type="range"
            value={slide}
            min="1"
            max={props.totalItems}
            onChange={(e) => setSlide(e.target.value)}
          />
          <output className="text-blue-600 font-bold text-xl mx-1">
            {slide}
          </output>
          <input
            onClick={() => {
              props.changeNumOfPosts(slide);
            }}
            type="submit"
            value="OK"
            className="m-1 border rounded-sm px-1"
          />
          <p>Izaberi broj prikaza po strani. </p>{' '}
        </div>
      </div>
    );
  }
};

export default Pagination;
