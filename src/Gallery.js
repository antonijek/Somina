import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const galleryArray = [
  {
    title: 'O nama',
    id: '0',
    slug: '/O nama',
    description: 'Manastir Somina...',
    imageSource:
      'https://www.in4s.net/wp-content/uploads/2021/01/manastir-somina.jpg',
  },
  {
    title: 'Proizvodi',
    id: '1',
    slug: '/proizvodi',
    description: 'Naši proizvodi...',
    imageSource:
      'https://www.dan.co.me/gfx_bb/Manastir-Preobrazenja-Gospodnjeg-na-Hercegovim-Lukama-na-planini-Somini.jpg',
  },
  {
    title: 'Recepti',
    id: '2',
    slug: '/recepti',
    description: 'Naši recepti...',
    imageSource:
      'data:image/jpeg;base64,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',
  },
  {
    title: 'Pouke',
    id: '3',
    slug: '/pouke',
    description: 'Ava Marko kaže...',
    imageSource:
      'https://images.unsplash.com/photo-1599478182733-bfe07a2ce7a0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8b3J0aG9kb3glMjBwcmllc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  },
  {
    title: 'Kontakt',
    id: '4',
    slug: '/kontakt',
    description: 'Broj telefona...',
    imageSource:
      'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnRhY3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  },
];

const otherGalleryItems = galleryArray.slice(1, 4);

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(-1);
  const [imgSrcObject, setImgSrcObject] = useState(null);
  const [leftButtonState, setLeftButtonState] = useState(false);
  const [rightButtonState, setRightButtonState] = useState(false);

  useEffect(() => {
    const handleModalKeydowns = (e) => {
      if (e.keyCode === 27) {
        setModal(false);
      } else if (e.keyCode === 37) {
        handleArrowClick(-1);
      } else if (e.keyCode === 39) {
        handleArrowClick(1);
      }
    };
    window.addEventListener('keydown', handleModalKeydowns);
    return () => window.removeEventListener('keydown', handleModalKeydowns);
  }, [index]);

  useEffect(() => {
    modal
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [modal]);

  const handleLeftButtonMouseEnter = () => {
    if (index === 0) {
      setLeftButtonState(true);
    }
  };

  const handleButtonMouseLeave = () => {
    setLeftButtonState(false);
    setRightButtonState(false);
  };

  const handleRightButtonMouseEnter = () => {
    if (index === galleryArray.length - 1) {
      setRightButtonState(true);
    }
  };

  const toggleModal = () => {
    // window.scrollTo(0, window.scrollY);
    setModal(!modal);
  };

  const settingIndexAndImgSrcObject = (index) => {
    setIndex(index);
    setImgSrcObject(galleryArray[index]);
  };

  const handleImageClick = (item, ind) => {
    toggleModal();
    settingIndexAndImgSrcObject(ind);
  };

  const handleArrowClick = (step) => {
    if (step > 0) {
      if (index < galleryArray.length - 1) {
        settingIndexAndImgSrcObject(index + step);
        setRightButtonState(false);
      } else {
        setRightButtonState(true);
      }
    } else {
      if (step < 0 && index > 0) {
        settingIndexAndImgSrcObject(index + step);
        setLeftButtonState(false);
      } else {
        setLeftButtonState(true);
      }
    }
  };

  return (
    <div className="container mx-auto">
      {/* SX SCREEN */}
      <div className="mt-28 px-4 mb-2 sm:hidden">
        <a>
          <img
            onClick={() => handleImageClick(galleryArray[0], 0)}
            src={galleryArray[0].imageSource}
            className="rounded-bl-3xl rounded-tr-3xl shadow-lg"
          />
        </a>
      </div>
      <div
        className={`flex justify-${
          otherGalleryItems.length < 3 ? 'start' : 'between'
        } px-4 sm:hidden`}
      >
        {otherGalleryItems.map((item, index) => {
          return (
            <a key={index}>
              <img
                onClick={() => handleImageClick(item, index + 1)}
                src={item.imageSource}
                className={`h-14 rounded-tl-2xl rounded-br-2xl mb-2 shadow-md ${
                  otherGalleryItems.length < 3 && 'mr-2'
                }`}
              />
            </a>
          );
        })}
      </div>
      {/* SM AND HIGHER SCREEN */}
      <div className="m-2 gap-2 justify-around mt-20 xs:hidden sm:flex">
        <a>
          <img
            onClick={() => handleImageClick(galleryArray[0], 0)}
            src={galleryArray[0].imageSource}
            className="h-28 rounded-bl-3xl rounded-tr-3xl shadow-xl"
          />
        </a>
        {otherGalleryItems.map((item, index) => {
          return (
            <a key={index}>
              <img
                onClick={() => handleImageClick(item, index + 1)}
                src={item.imageSource}
                className="h-28 rounded-bl-3xl rounded-tr-3xl shadow-xl"
              />
            </a>
          );
        })}
      </div>
      {/* MODAL */}
      <div
        onKeyPress={toggleModal}
        className={`${
          modal ? '' : 'hidden'
        } fixed bottom-0 left-0 w-full h-full bg-gray-200 bg-opacity-80`}
      >
        <div className="flex w-full h-full mx-auto justify-center items-center">
          <div className="container relative xs:w-full">
            <div>
              <button
                onClick={toggleModal}
                className="absolute -top-16 right-0 text-white text-16 font-extralight p-5"
              >
                X
              </button>
              <button
                onMouseEnter={handleLeftButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleArrowClick(-1)}
                style={{
                  cursor: `${!leftButtonState ? 'pointer' : 'not-allowed'}`,
                }}
                className="absolute sm:ml-4 sm:bottom-1/2 bottom-0 text-32 text-white"
              >
                <FaAngleLeft />
              </button>
              <button
                onMouseEnter={handleRightButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
                onClick={() => handleArrowClick(1)}
                style={{
                  cursor: `${!rightButtonState ? 'pointer' : 'not-allowed'}`,
                }}
                className="absolute sm:mr-4 sm:bottom-1/2 bottom-0 text-32 text-white right-0"
              >
                <FaAngleRight />
              </button>
            </div>
            <img
              src={imgSrcObject && imgSrcObject.imageSource}
              className="max-w-full sm:max-w-10/12 max-h-3/4 mx-auto"
            />
            <p className="text-center text-white font-extralight mt-5">{`${
              index + 1
            } / ${galleryArray.length}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
