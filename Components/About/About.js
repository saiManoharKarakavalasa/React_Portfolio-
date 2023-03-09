import React, { useEffect } from "react"
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About(){
useEffect(() =>{
    AOS.init({duration : 1500})
},[])

    return(
        <div id="about" className="about bg-dark w-100 vh-100">
            <div className="row wrapper">
              <div className="about_text col-12 col-md-6 col-lg-6 px-5" data-aos = "fade-right">
               <h3><span>01.</span>About me</h3>
               <p id="one">
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                  

                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
                Hello my name is Karakavalasa Sai Manohar i am web developer
               </p>
               <div className="row technology">
                <div className="col-6">
                    <p><span>*</span>Java Script</p>
                    <p><span>*</span>React JS</p>
                    <p><span>*</span> Node.JS</p>
                </div>
                
                <div className="col-6">
                    <p><span>*</span>Type Script</p>
                    <p><span>*</span>Bootstrap</p>
                    <p><span>*</span>Wordpress</p>
                </div>
               </div>     
            </div>
             <div className="about_image col-12 col-md-6 col-lg-6
                              d-flex justify-content-center align-items-center" data-aos = "fade-left">
                <img src='/logo192.png' alt="No image" />

             </div>
        </div>
        </div>

    )
}

export default About