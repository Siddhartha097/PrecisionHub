import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-main'>
      
      <div className='home-page1'>    
        {/* <img src="https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='home' /> */}
        <div className='page1-title'>
          <h2>Part1</h2>
        </div>
        <div className='page1-img'></div>
        
      </div>

      <div className='home-page2'>
        <h1>
          This is Part2
        </h1>
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

      <div className='home-page3'>
        <div className='page3-contents'>
          <div className='content-upper'>
            <h1>Business Hours</h1>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className='content-lower'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum culpa consequuntur at laudantium odit.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero sed praesentium eligendi? Dignissimos, quis!
            </p>
          </div>
        </div>
        <img className='page3-img' src='https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='page3-img' />
        {/* <div className='page3-img'>   
        </div> */}
      </div>
    </div>
  )
}

export default Home
