import { useState, useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { GrLinkPrevious } from 'react-icons/gr';
import { GrLinkNext } from 'react-icons/gr';
const Pagination = (props) => {
  const [sugest, setSugest] = useState([]);
  const [open, setOpen] = useState(false);
  const numOfPages = [];
  const pages = Math.ceil(props.totalItems / props.postPerPage);

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  useEffect(() => {
    if (open) {
      setSugest([5, 10, 20, 50, 100]);
    } else {
      setSugest([]);
    }
  }, [open]);

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
        <div className="flex justify-center">
          <p onClick={() => setOpen(!open)} className="text-center mt-4 ">
            Broj prikaza po stranici je :
            <span className="font-bold ml-2">{props.postPerPage}</span>
          </p>
          <div className=" w-12 h-8 grid grid-cols-1 divide-y ml-1 -mt-1 text-sm">
            {sugest.map((num) =>
              num <= props.totalItems ? (
                <button
                  key={num}
                  onClick={() => {
                    props.changeNumOfPosts(num);
                    setOpen(!open);
                  }}
                  className="bg-gray-500 font-black"
                >
                  {num}
                </button>
              ) : null,
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto">
        <div className="flex justify-center">
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

            <p className="mx-1">...</p>
            {props.currentPage > 1 &&
            props.currentPage < numOfPages.length - 2 ? (
              <div className="flex">
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
                <p className="mx-1">...</p>
              </div>
            ) : null}

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
          {props.currentPage < pages - 1 && (
            <button
              onClick={props.next}
              className="flex bg-red-100  hover:bg-red-300 p-2"
            >
              <p className="">Next </p>
              {<GrLinkNext size={24} />}
            </button>
          )}
        </div>
        <div className="flex justify-center  py-2">
          <p className="text-center mt-4 ">
            Broj prikaza po stranici je :
            <span onClick={() => setOpen(!open)} className="font-bold ml-2">
              {props.postPerPage}
            </span>
          </p>
          <div className=" w-12 h-8 grid grid-cols-1 divide-y ml-1 -mt-1 text-sm">
            {sugest.map((num) =>
              num <= props.totalItems ? (
                <button
                  key={num}
                  onClick={() => {
                    props.changeNumOfPosts(num);
                    setOpen(!open);
                  }}
                  className="bg-gray-500 font-black"
                >
                  {num}
                </button>
              ) : null,
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Pagination;
