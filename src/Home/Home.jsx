import React from 'react'
import './Home.css';
import Image1 from './img/BussinessIntelligence.svg';
import Image2 from './img/helpdesk.svg';
import Image3 from './img/WebServices.svg';
import Card from '../components/Card/Card';


const Home = () => {
  return (
    <div className='home-main'>
      
      <div className='home-page1'>    
        {/* <img src="https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='home' /> */}
        <div className='page1-title'>
          <h2>Accelerating Safety:
            Where AI Meets Speed, Ensuring Roads of Tomorrow are Secure Today</h2>
        </div>
        <div className='page1-img'></div>
        
      </div>

      <div className='home-page2'>
        <h1>
          This is Part2
        </h1>
        <div className='page2-cards'>
          <section className='cards-section'>
            <Card 
              title={'Article1'}  
              content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt dicta labore quibusdam amet suscipit optio iure sit corrupti excepturi.'}
              image={Image2}
            />
            <Card 
              title={'Article2'}  
              content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt dicta labore quibusdam amet suscipit optio iure sit corrupti excepturi.'}
              image={Image1}
              align={'center'}
            />
            <Card 
              title={'Article3'}  
              content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt dicta labore quibusdam amet suscipit optio iure sit corrupti excepturi.'}
              image={Image3}
              align={'right'}
            />
          </section>
          <section className='cards-section'>
            <Card 
              title={'Article4'}  
              content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt dicta labore quibusdam amet suscipit optio iure sit corrupti excepturi.'}
              image={Image2}
            />
            <Card 
              title={'Article5'}  
              content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt dicta labore quibusdam amet suscipit optio iure sit corrupti excepturi.'}
              image={Image1}
              align={'center'}
            />
            <Card 
              title={'Article6'}  
              content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nesciunt dicta labore quibusdam amet suscipit optio iure sit corrupti excepturi.'}
              image={Image3}
              align={'right'}
            />
          </section>
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
