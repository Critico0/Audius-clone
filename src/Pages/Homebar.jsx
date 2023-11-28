import React from 'react'

import './Homebar.css'

function Homebar() {
  return (
    <div className='home-navbar'>
        <h1>Trending</h1>
            <div className='genres'>
                <span>All Genres</span>
                <span>Electronic</span>
                <span>Hip-Hop/Rap</span>
                <span>Alternative</span>
                <span>...</span>
            </div>
    </div>
  )
}

export default Homebar