import React from 'react'
import Sideimage from './Sideimage'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import image from '../assets/sideimage.png'

function Home() {
  return (
    <div className="">
    <div className='flex'>
      <div className=" mt-16 ml-10 md:ml-28 md:flex-1">
        <h1 className='md:text-6xl font-semibold  text-4xl '>
          Grow your wealth with higher returns
        </h1>
        <p className='md:text-4xl mt-6 text-2xl'>Your platform for exclusive opportunities</p>
        <div className="flex  items-center">
        <img src={image} alt="image" className='w-[18rem] h-[18rem]  mt-8'></img>
        </div>
        <Link to={"/Login"}><button className='p-2 bg-blue-800 rounded-lg text-white  md:p-2 md:bg-blue-800 md:text-white md:rounded-lg mt-5'>Get Started</button></Link>
      </div>
      <div className="hidden md:flex-1">
        <Sideimage/>
      </div>
    </div>
    </div>
  )
}

export default Home