import React from 'react'
import Search from '../assets/icons/search'

import './Homebar.css'

function Homebar() {
  return (
    <div className='home-navbar'>
      <section className='search-bar'>
        <span className='search-icon'><Search /></span>
        <input className='search' type='text' placeholder='Search'></input>
      </section>
      <section className='home-content'>
        <h1>Trending</h1>
            <div className='genres'>
                <span className='genre'>All Genres</span>
                <span className='genre'>Electronic</span>
                <span className='genre'>Hip-Hop/Rap</span>
                <span className='genre'>Alternative</span>
                <span className='dots'>...</span>
            </div>
      </section>
    </div>
  )
}

export default Homebar