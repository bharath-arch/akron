import React from 'react'
import ReactLoading from 'react-loading';


function Spinner() {
  return (
    <div className='flex items-center w-auto h-screen place-content-center'>
        <ReactLoading type="spinningBubbles" color="#444" />
    </div>
  )
}

export default Spinner