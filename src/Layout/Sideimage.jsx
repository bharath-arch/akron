import React from 'react'
import image from '../assets/sideimage.png'

function Sideimage() {
  return (
    <div>
        <div className="" style={{width:'auto',position:'relative'}}>
            <img src={image} alt="image" style={{position:'absolute',top:'145px',left:'75px'}} />
        </div>
    </div>
  )
}

export default Sideimage