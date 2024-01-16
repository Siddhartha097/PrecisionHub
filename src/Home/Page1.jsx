import React, { useEffect } from "react";
import image from './img/bottom-part2.jpg'
import video from './videos/hero1.mp4'
import {Swiper , SwiperSlide} from 'swiper/react'
import logo from './logo/title_icon.png'
import { Link } from "react-router-dom";
import { SiCyberdefenders } from "react-icons/si";
import { RiRobotFill } from "react-icons/ri";


function Page1(){
    function page3Animation(){
        var projectscon = document.querySelector("#page3-elem-container")
    var fiximgs = document.querySelector("#fixed-images")
    projectscon.addEventListener("mouseenter",function(){
        fiximgs.style.display = "block"
    })
    projectscon.addEventListener("mouseleave",function(){
        fiximgs.style.display = "none"
    })
    var projects = document.querySelectorAll(".page3-elem")
    projects.forEach(function(s){
        s.addEventListener("mouseenter",function(){
            var i = s.getAttribute("data-image")
            fiximgs.style.backgroundImage = `url(${i})`
        })
    })
    }
    useEffect(() =>{
        page3Animation()
    })
    return(<>
    
    
    <div id="main">
        <div id="page1">

            <div id="center">
                <div id="left">
                    <h4>PrecisionHub – where innovation meets sustainability. We're on a mission to redefine tech
                        solutions responsibly. Harnessing cutting-edge advancements, we pioneer eco-conscious practices,
                        ensuring a greener tomorrow. Join us in shaping the future, where your tech needs are met with a
                        commitment to environmental stewardship.</h4>
                </div>
                <div id="right">
                    <h1>
                        Shaping the <br/>
                        future of <br/>
                        Innovation <br/></h1>
                </div>
            </div>
            <div id="hero-shape">
                <div id="hero-shape-1"></div>
                <div id="hero-shape-2"></div>
                <div id="hero-shape-3"></div>
            </div>
            <video autoPlay loop  muted> <source src={video} /></video>
        </div>
        <div id="page2">
            <div id="moving-text">
                <div class="moving-text-con">
                    <h1>Machine Learning</h1>
                    <div id="gola"></div>

                    <h1>Deep Learning</h1>
                    <div id="gola"></div>

                    <h1>Web Services</h1>
                    <div id="gola"></div>

                    <h1>Big Data Analysis</h1>
                    <div id="gola"></div>

                    <h1>Model Building</h1>
                    <div id="gola"></div>

                    <h1>Auto ML</h1>
                    <div id="gola"></div>
                </div>
                <div class="moving-text-con">
                    <h1>Machine Learning</h1>
                    <div id="gola"></div>

                    <h1>Deep Learning</h1>
                    <div id="gola"></div>

                    <h1>Web Services</h1>
                    <div id="gola"></div>

                    <h1>Big Data Analysis</h1>
                    <div id="gola"></div>

                    <h1>Model Building</h1>
                    <div id="gola"></div>

                    <h1>Auto ML</h1>
                    <div id="gola"></div>
                </div>
                <div class="moving-text-con">
                    <h1>Machine Learning</h1>
                    <div id="gola"></div>

                    <h1>Deep Learning</h1>
                    <div id="gola"></div>

                    <h1>Web Services</h1>
                    <div id="gola"></div>

                    <h1>Big Data Analysis</h1>
                    <div id="gola"></div>

                    <h1>Model Building</h1>
                    <div id="gola"></div>

                    <h1>Auto ML</h1>
                    <div id="gola"></div>
                </div>
            </div>
            <div id="page2-bottom">
                <h1>We deeply care about responsible <br/>
                    and ethical tech practices,<br/>
                    ensuring transparency, accountability, <br/>
                    and the positive use of every <br/>
                    algorithm we develop.</h1>
                <div id="bottom-part2">
                    <img src={image} alt="no image"/>
                    <p>In a world that evolves rapidly, we care about fostering a culture of continuous learning. We
                        encourage adaptability, curiosity, and the pursuit of knowledge, recognizing that growth is a
                        lifelong journey.</p>
                </div>
            </div>
            <div id="page2-bottom-shape">
                <div id="page2-bottom-shape1"></div>
                <div id="page2-bottom-shape2"></div>
            </div>
        </div>
        
        <div id="page3">
            <div className="Featured" style={{padding:30, color: "green"}}><li>Featured Work</li></div>
            <div id="page3-elem-container">
                <div class="page3-elem" id="project1"
                    data-image="https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="page3-elem-overlay"></div>
                    <h2>FlameShield IoT-Internet of Things Fire Safety Integration</h2>
                </div>
                <div class="page3-elem" id="project2"
                    data-image="https://images.unsplash.com/photo-1641893823219-38b433f736c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="page3-elem-overlay"></div>
                    <h2>SafeWork Pro-Integrated Safety Compliance Platform</h2>
                </div>
                <div class="page3-elem" id="project3"
                    data-image="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="page3-elem-overlay"></div>
                    <h2>PrecisionAnalytics Suite-End-to-End Big Data Solutions</h2>
                </div>
                <div class="page3-elem" id="project4"
                    data-image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="page3-elem-overlay"></div>
                    <h2>PrecisionAPI Gateway-API Management for Web Services</h2>
                </div>
                <div class="page3-elem" id="project5"
                    data-image="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="page3-elem-overlay"></div>
                    <h2>Custom Web Development,Content Management Systems(CMS),Web Security Solutions</h2>
                </div>
                <div class="page3-elem" id="project6"
                    data-image="https://plus.unsplash.com/premium_photo-1684522168034-32f22b4b7eef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <div class="page3-elem-overlay"></div>
                    <h2>Consulting and Strategy Services</h2>
                </div>
            </div>
        </div>
        <div id="page4">
        <Swiper className="glass targ" 
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{height:300 ,overflow: 'hidden'}}
    >
      <SwiperSlide style={{}} className="slide"><div className="circle2"><div className="circle"><SiCyberdefenders color="white" fontSize={100} /></div></div>
        <h2 style={{textIndent:30, padding:30}}>Expertise that Drives Success. From Software Solutions to Cutting-Edge Cybersecurity</h2>
      </SwiperSlide>


      <SwiperSlide className="slide"><div className="circle2"><div className="circle"><RiRobotFill fontSize={100} color="white"/></div></div><h2 style={{textIndent:30, padding:30}}>Innovation Redefined. Crafting Solutions that Propel Your Business Forward.</h2></SwiperSlide>

      <SwiperSlide className="slide"><div className="circle2"><div className="circle">Slide 3</div></div></SwiperSlide>

      <SwiperSlide className="slide"><div className="circle2"><div className="circle">Slide 4</div></div></SwiperSlide>

    </Swiper>
        </div>
        <div id="page5">
            <h1>page5</h1>
        </div>

    </div>
    <div id="fixed-images"></div>
    <div id="footer">
        <h1 style={{textAlign:'center'}}>PrecisionHub</h1>
        <div id="footer-bottom"></div>
    </div>
    <div class="copyright">
        <h4 style={{fontSize:'18'}}>All Copyrights Reserved by PRECISIONHUB IT INDUSTRIES PRIVATE LIMITED. CIN: U62099WB2023PTC264926. THANK
            YOU. VISIT AGAIN.</h4><br/>
        <h5 style={{fontSize:'14'}}>PrecisionHub IT Industries Private Limited: Since : 2023 CIN</h5>
    </div>

    <div id="full-screen"></div>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    
    </>

    )
}
export default Page1