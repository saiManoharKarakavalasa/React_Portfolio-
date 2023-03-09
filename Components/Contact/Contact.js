import React from "react"
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function Contact(){
    useEffect(() =>{
        AOS.init({duration : 1500})
    },[])
    return(
        <div id="contact" className="contact w-100 vh-100 bg-dark d-flex flex-column justify-content-center align-items-center">
            <div className="w-50 text-center" >
             <p className="what" data-aos="fade-left"><span>04.</span>What is next?</p>
             <h1 className="text-white" data-aos="zoom-in">Get in Touch</h1>
             <p className="detail" data-aos="fade-right"> 
             Sometimes, when we may be discouraged, we are tempted to believe that only the “lucky”
             people receive the best opportunities and that we just don’t have that lucky quality
             Sometimes, when we may be discouraged, we are tempted to believe that only the “lucky”
             people receive the best opportunities and that we just don’t have that lucky quality
            
             </p>

             <button className="bg-transparent">Say Hello</button>
        </div></div>
           )
}

export default Contact