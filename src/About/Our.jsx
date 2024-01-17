import React, { useEffect, useRef } from 'react'
import './Our.css'



const Our = () => {

    const open1 = useRef(null);
    const open2 = useRef(null);

    function openn(op){
  
        op.current.classList.add("animate2")
        console.log(open1.classList)
    }

    useEffect(()=>{
        // openn(open1)
        // openn(open2)
        setTimeout(()=>{openn(open1)},3061)
        setTimeout(()=>{openn(open2)},1700)
          
    }, [])

    return (

    
    <div className='inner'>
    <div className='page0 page1' ref={open1}>
<div className="page pages1"  >
    <h1>Our Journey: <br/>
PrecisionHub IT <br/>
Industries Private <br/>
Limited</h1>
    <p>Founded in September 2023, <br/>
PrecisionHub IT Industries Private <br/>
Limited embarked on a <br/>
transformative journey with a <br/>
mission to redefine B2B IT solutions. <br/>
From our humble beginnings, we <br/>
have been dedicated to harnessing <br/>
the power of cutting-edge <br/>
technologies to drive innovation and <br/>
efficiency for businesses across <br/>
diverse industries.</p>
</div>

</div>
    <div className='page0 page2' style={{backgroundColor:'#FF4B4B'}} ref={open2}>
<div className="page pages2" style={{backgroundColor:'#FF7145', textAlign:'right'}}>
    <h1>Our Journey: <br/>
PrecisionHub IT <br/>
Industries Private <br/>
Limited</h1>
    <p>Founded in September 2023, <br/>
PrecisionHub IT Industries Private <br/>
Limited embarked on a <br/>
transformative journey with a <br/>
mission to redefine B2B IT solutions. <br/>
From our humble beginnings, we <br/>
have been dedicated to harnessing <br/>
the power of cutting-edge <br/>
technologies to drive innovation and <br/>
efficiency for businesses across <br/>
diverse industries.</p>
</div>

    </div>
    
    
    
    </div>
    
  )
}

export default Our