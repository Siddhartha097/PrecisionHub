import React from "react";
import "./Contact.css"
import Open1 from "../OpeningScene/open1";
function Contact(){
    return(<><Open1></Open1><div id="page1">
     <section class="contact" id="contact">
            <h1 class="heading">
                <span>c</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
            </h1>
            <div class="row">
                <div class="image">
                    <img src="https://www.travelinc.com/wp-content/uploads/2018/09/Contact-Us-Banner.jpg" alt="This image is missing"/>
                </div>
                <form action="">
                    <div class="inputBox">
                        <input type="text" placeholder="name"/>
                        <input type="email" placeholder="email"/>
                        
                    </div>
                    <div class="inputBox">
                        <input type="text"placeholder="Phone number"/>
                        <input type="text" placeholder="subject"/>
                    </div>
                    <textarea placeholder="message" name="" class="msg" cols="20" rows="8"></textarea>
                    <input type="submit" class="btn" value="send message"/>
                    <div class="reachus">
                     <h2> Reach Us</h2>
                     <p>Email: md@precisionsolutions.online</p><br/>
                     <p>Phone No: +91 7501039053</p><br/>
                     <p>Address: Head Office : Kumaresh Biswas RD, Kadamkanan ,Jhargram.</p><br/>
                    </div>
                </form>
            </div>
        </section>
</div>
    </>)
}
export default Contact