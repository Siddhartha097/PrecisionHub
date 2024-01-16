import React, { useEffect, useRef } from "react";
import './open1.css'
function Open1(){
    const open1 = useRef(null);
    const open2 = useRef(null);
    const open3 = useRef(null);
    
      function openn(op){
  
        op.current.classList.add("animate")
        console.log(open1.classList)}
      
        //Add a class to trigger the CSS animation
        useEffect(()=>{
          setTimeout(()=>{openn(open3)},1061)
          setTimeout(()=>{openn(open2)},2500)
          setTimeout(()=>{openn(open1)},4000)
          
        })
    
        


    return(<>
      <div id="content" ref={open1}  className="open">
      <h1 >Precision</h1>
    {/* <p>This is your page content.</p> */}
  </div>
  <div id="content2" ref={open2}  className="open">
      <h1 >InDepth</h1>
    {/* <p>This is your page content.</p> */}
  </div>
  <div id="content3" ref={open3}  className="open">
      <h1 >Trusted</h1>
    {/* <p>This is your page content.</p> */}
  </div>
    </>)
}

export default Open1