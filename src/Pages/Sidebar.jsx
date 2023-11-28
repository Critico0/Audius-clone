import React from 'react'

import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className='sidebar-content'>
            <section className='discover'>
                <h3>DISCOVER</h3>
                    <ul>
                        <li><a href="#">Feed</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">Explore</a></li>
                    </ul>
            </section>
            <section className="yours">
                <h3>YOUR MUSIC</h3>
                    <ul>
                        <li><a href="#">Library</a></li>
                        <li><a href="#">History</a></li>
                    </ul>
            </section>
            <section className="signup">
                <button>SIGN UP</button>
            </section>
        </div>
    </div>
  )
}

export default Sidebar