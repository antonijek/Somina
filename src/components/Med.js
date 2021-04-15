import React from 'react'
import { useEffect, useState } from 'react'
const Proiz = [
  {
    name: 'melem',
    id: 1,
    cijena: '10 evra',
    slika: 'ovdje ce da ide neka slika',
  },
  {
    name: 'med',
    id: 2,
    cijena: '11 evra',
    slika: 'ovdje ce da ide neka slika',
  },
  {
    name: 'kapi',
    id: 3,
    cijena: '102 evra',
    slika: 'ovdje ce da ide neka slika',
  },
  {
    name: 'rakija',
    id: 4,
    cijena: '13 evra',
    slika: 'ovdje ce da ide neka slika',
  },
  {
    name: 'caj',
    id: 5,
    cijena: '14 evra',
    slika: 'ovdje ce da ide neka slika',
  },
  {
    name: 'sir',
    id: 6,
    cijena: '15 evra',
    slika: 'ovdje ce da ide neka slika',
  },
]

const Proizvod = () => {
  const [pro, setPro] = useState({ ja: 22 })
  const dugme = (e) => {
    setPro(e)
    console.log(e)
  }

  return (
    <div className=' container  mx-auto'>
      {Proiz.map((item) => (
        <div>
          <h2
            className=' bg-red-500'
            onClick={(e) => {
              dugme(item)
            }}
          >
            {item.name}
          </h2>
        </div>
      ))}

      <div className='mt-8 border-2'>
        <p className='bg-yellow-500  text-green-500 text-2xl'>{pro.id}</p>
        <p className='bg-black-500 text-green-500 text-2xl'>{pro.name}</p>
        <p className=' bg-indigo-500 text-green-500 text-2xl'>{pro.cijena}</p>
        <p className=' bg-gray-500 text-green-500 text-2xl'>{pro.slika}</p>
      </div>
    </div>
  )
}

export default Proizvod
