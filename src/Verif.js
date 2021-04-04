import React from 'react';
import { useEffect, useState } from 'react';

let instructions = {
  numOfChar: '- 8 ili vise karaktera',
  FirstLetter: '- Prvo veliko slovo',
  onlyNumAndLett: '- Samo slova i brojevi',
};

const Verif = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState({});
  const [eightChar, setEightChar] = useState('');
  const [firstLetter, setFirstLetter] = useState('');
  const [numAndLett, setNumAndLett] = useState('');

  useEffect(() => {
    if (username.length > 0) {
      setError(instructions);
    } else {
      setError({});
    }
    if (username.length > 7) {
      setEightChar('../slike/doneGreen.png');
    } else {
      setEightChar('');
    }
    if (
      username.length > 0 &&
      username[0].toUpperCase() === username[0] &&
      username[0] !== Number
    ) {
      setFirstLetter('../slike/doneGreen.png');
    } else {
      setFirstLetter('');
    }
  }, [username]);

  return (
    <div className="bg-red-200 h-24">
      <form action="">
        <label htmlFor=""> Unesite vase korisnicko ime : </label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          name=""
          id=""
        />
        <button type="submit">ok</button>
      </form>
      <div className=" bg-gray-500 ml-60 w-52 rounded-lg">
        <div className="flex">
          <p>{error.numOfChar}</p>
          <img className="w-6 text-green-500" src={eightChar} alt="" />
        </div>
        <div className="flex">
          <p>{error.FirstLetter}</p>
          <img className="w-6 text-green-500" src={firstLetter} alt="" />
        </div>
        <div className="flex">
          <p>{error.onlyNumAndLett}</p>
          <img className="w-6 text-green-500" src={numAndLett} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Verif;
