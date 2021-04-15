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

  return (
    <div>
      <div className="flex justify-center  ">
        {props.currentPage > 0 && (
          <button
            onClick={props.prev}
            className="flex bg-red-100 hover:bg-red-300 p-2"
          >
            {' '}
            {<GrLinkPrevious size={24} />}
            <p className="ml-2">Previous</p>
          </button>
        )}

        <div className=" flex ml-8 mr-8">
          {numOfPages.slice(0, 3).map((number) => (
            <button
              key={number}
              className="w-6 h-6 bg-red-100  hover:bg-red-300 m-1"
              onClick={() => props.showThePage(number)}
            >
              {' '}
              {number}
            </button>
          ))}
          <p className="ml-2 mr-2">. . .</p>
          {numOfPages
            .slice(numOfPages.length - 2, numOfPages.length)
            .map((number) => (
              <button
                key={number}
                className="w-6 h-6 bg-red-100  hover:bg-red-300 m-1"
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
            <p className="mr-2">Next </p>
            {<GrLinkNext size={24} />}
          </button>
        )}
      </div>
      <div className="relative flex justify-center mx-2 my-2">
        <p className="">
          Broj prikaza na strani je :{' '}
          <span className="font-black">{props.postPerPage}</span>
        </p>
      </div>
      <div className="grid ml-60 -mt-4 ">
        <p
          onClick={() => setOpen(!open)}
          className="font-bold flex justify-center"
        >
          {<MdArrowDropDown size={24} />}
        </p>

        {sugest.map((num) =>
          num <= props.totalItems ? (
            <button
              key={num}
              onClick={() => {
                props.changeNumOfPosts(num);
                setOpen(!open);
              }}
              className="flex justify-center"
            >
              {num}
            </button>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default Pagination;
