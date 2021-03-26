import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className=' container text-center my-24'>
      <h2 className='text-4xl m-8'>Greska 404!</h2>
      <h2 className='text-4xl m-8'>Ova stranica ne postoji!</h2>
      <Link to='/'>
        <button className='bg-blue-500 rounded-lg p-4 text-lg'>
          Idi na pocetnu!
        </button>
      </Link>
    </div>
  )
}

export default ErrorPage
