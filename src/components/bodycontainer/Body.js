import React from 'react'
import Hero from '../hero/Hero'
import Sidebar from '../sidebar/Sidebar'
import "./body.css";

const Body = () => {
  return (
    <div className='side-hero'>
        <Sidebar/>
        <Hero/>
    </div>

  )
}

export default Body