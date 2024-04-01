import React from 'react'
import Sideimage from './Sideimage'
import Layout from './Layout'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="">
    <div className='flex'>
      <div className=" mt-16  ml-28 flex-1">
        <h1 className='text-6xl font-semibold '>
          Grow your wealth with higher returns
        </h1>
        <p className='text-4xl mt-6'>Your platform for exclusive opportunities</p>
        <button className='text-xl p-2 bg-blue-800 text-white rounded-lg mt-12'><Link to={"/Login"}>Get Started</Link></button>
      </div>
      <div className="flex-1">
        <Sideimage/>
      </div>
    </div>
    </div>
  )
}

export default Home