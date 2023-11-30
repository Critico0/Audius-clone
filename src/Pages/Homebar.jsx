import React from 'react'

import './Homebar.css'

function Homebar() {
  return (
    <div className='home-navbar'>
      <section className='navbar'>
        <input className='search' type='text' placeholder='Search'></input>
      </section>
        <h1>Trending</h1>
            <div className='genres'>
                <span className='genre'>All Genres</span>
                <span className='genre'>Electronic</span>
                <span className='genre'>Hip-Hop/Rap</span>
                <span className='genre'>Alternative</span>
                <span className='dots'>...</span>
            </div>
    </div>
  )
}

export default Homebar