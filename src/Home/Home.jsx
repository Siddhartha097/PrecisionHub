import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-main'>
      
      <div className='home-img'>
        <img src='https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='home' />
      </div>

      <div className='home-page2'>
        <h1>This is Part2</h1>

        <div className='page2-contents'>
          <div className='page-left'>
            <img src='https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D' alt='left' />
            <div className='page-left_content'>
              <h3>Article1</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt dicta labore quibusdam amet suscipit optio iure sit corrupti excepturi.
              </p>
            </div>
          </div>
          <div className='page-right'>
            <img src='https://images.unsplash.com/photo-1543248939-4296e1fea89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D' alt='right' />
            <div className='page-right_content'>
              <h3>Article2</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt dicta labore quibusdam amet suscipit optio iure sit corrupti excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
