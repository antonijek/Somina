import React from 'react';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

const Proiz = [
  {
    name: 'melem',
    id: 1,
    cijena: '10 evra',
    slika: 'ovdje ce da ide neka slika',
    path: '/melem',
  },
  {
    name: 'med',
    id: 2,
    cijena: '11 evra',
    slika: 'ovdje ce da ide neka slika',
    path: '/med',
  },
  {
    name: 'kapi',
    id: 3,
    cijena: '102 evra',
    slika: 'ovdje ce da ide neka slika',
    path: '/kapi',
  },
  {
    name: 'rakija',
    id: 4,
    cijena: '13 evra',
    slika: 'ovdje ce da ide neka slika',
    path: '/rakija',
  },
  {
    name: 'caj',
    id: 5,
    cijena: '14 evra',
    slika: 'ovdje ce da ide neka slika',
    path: '/caj',
  },
  {
    name: 'sir',
    id: 6,
    cijena: '15 evra',
    slika: 'ovdje ce da ide neka slika',
    path: '/sir',
  },
];

const Proizvod = (props) => {
  const [pro, setPro] = useState({ ja: 22 });
  const dugme = (e) => {
    setPro(e);
    console.log(e);
  };
  let { path, url } = useRouteMatch();
  return (
    <div className=" container  mx-auto relative">
      {Proiz.map((item) => (
        <div key={item.id} className=" bg-gray-300 text-center">
          <Link to={url + item.path}>{item.name}</Link>
        </div>
      ))}

      <Switch>
        {Proiz.map((item) => (
          <Route path={path + item.path}>
            <h2>{item.name}</h2>
            <p>{item.cijena}</p>
            <p>{item.id}</p>
            <p>{item.slika}</p>
          </Route>
        ))}
      </Switch>
      <div className="mt-8 text-center">
        <p className="bg-gray-500 text-green-500 text-2xl">{pro.name}</p>
        <p className="bg-gray-500  text-green-500 text-2xl">{pro.id}</p>

        <p className=" bg-gray-500 text-green-500 text-2xl">{pro.cijena}</p>
        <p className=" bg-gray-500 text-green-500 text-2xl">{pro.slika}</p>
      </div>
    </div>
  );
};

export default Proizvod;
