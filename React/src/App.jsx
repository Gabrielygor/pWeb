import './App.css'
import { Link } from 'react-router-dom'

export function App() {

  return (

    <div className='h-screen w-screen bg-zinc-900 flex flex-col gap-4 justify-center items-center'>
      <h1 className="text-3xl font-bold text-zinc-200">
        React Recipes
      </h1>

      <div className='flex flex-col justify-center items-center gap-2'>
        <Link to="/recipe1">
          <button className='bg-zinc-700 text-zinc-200 font-bold   p-3 rounded flex justify-center items-center'>Recipe 01</button>
        </Link>
      </div>


    </div>

  )
}

