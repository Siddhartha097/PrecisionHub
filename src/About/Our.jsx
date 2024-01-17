import React, { useEffect, useRef } from 'react'
import './Our.css'

const Our = () => {

    const open1 = useRef(null);
    const open2 = useRef(null);

    const openn = (op) => {
  
        op.current.classList.add("animate3")
        console.log(open1.classList)
    }

    const opennRight = (op) => {
  
        op.current.classList.add("animate2")
        console.log(open1.classList)
    }

    useEffect(()=>{
        // openn(open1)
        // opennRight(open2)
        setTimeout(()=>{openn(open1)},1301)
        setTimeout(()=>{opennRight(open2)},1300)
          
    }, [])

    return (

    
    <div className='inner'>
        <div className='page0 page1' style={{background: 'linear-gradient(to left ,  black 70%, gray)'}} ref={open1}>
            <div className="page pages1"  >
                <h1>
                    Our Journey: PrecisionHub IT 
                    <br/>
                    Industries PrivateLimited
                </h1>
                <p>
                    Founded in September 2023, 
                    <br/>
                    PrecisionHub IT Industries Private 
                    <br/>
                    Limited embarked on a 
                    <br/>
                    transformative journey with a 
                    <br/>
                    mission to redefine B2B IT solutions. 
                    <br/>
                    From our humble beginnings, we 
                    <br/>
                    have been dedicated to harnessing 
                    <br/>
                    the power of cutting-edge 
                    <br/>
                    technologies to drive innovation and 
                    <br/>
                    efficiency for businesses across 
                    <br/>
                    diverse industries.
                </p>
            </div>
        </div>

        {/* <button onClick={() => {}} className='openBtn' type='button'>
            Open
        </button> */}

        <div className='page0 page2' style={{background: 'linear-gradient(to right ,  #da3535 60%, #f36b41fe)'}} ref={open2}>
            <div className="page pages2" style={{ textAlign:'right'}}>
                <h1>
                    Inception and Vision
                </h1>
                <br/>
                <p>
                    Our journey began with a vision to 
                    <br />
                    elevate the standards of IT solutions, 
                    <br />
                    recognizing the pivotal role they play 
                    <br />
                    in shaping the future of businesses. 
                    <br />
                    From day one, we set out to create 
                    <br />
                    a company that blends expertise 
                    <br />
                    with creativity, delivering solutions 
                    <br />
                    that not only meet but exceed the 
                    <br />
                    evolving needs of our clients.
                </p>
            </div>
        </div>   
    </div>
    
  )
}

export default Our