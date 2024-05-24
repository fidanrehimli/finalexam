import React from 'react'
import "./style.css"
const Updated = () => {
  return (
    <div className='updated'>
        <p className='updatep'>JOIN OUR NEWSLETTER</p>
        <h1 className='updatetext'>Subscribe to get Updated<br/>with new offers</h1>
        <div className='inpbtn'>
            <input className='updateinp' placeholder='Enter Email Address'/>
            <button className='updatebtn'>SUBSCRIBE NOW</button>

        </div>

    </div>
  )
}

export default Updated