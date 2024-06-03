import React from 'react'
import image from '../assets/growth.png'


function Sideimage() {
  return (
    <div>
        {/* <div className=" " > */}
          {/* md:w-auto md:relative */}
            <img src={image} alt="Stocks" className="rounded-3xl " />
            {/* mt-4 md:absolute md:top-[145px] md:left-[75px]*/}
        {/* </div> */}
    </div>
  )
}

export default Sideimage