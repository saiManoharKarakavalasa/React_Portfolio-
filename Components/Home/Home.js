import React from "react"
import Nav from "../Nav/Nav"
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'bootstrap'
import './Home.css'
import Typewriter from 'typewriter-effect'


function Home(){
    return(
        <div id="home" className="home bg-dark w-100 vh-100">
            <Nav />
            <div className="icons-container">
                <ul className="icons">
                    <li><a href='#'><i className="bi bi-github text-secondary" style={{fontSize: "25px"}}></i></a></li>
                    <li><a href='#'><i className="bi bi-envelope  text-secondary" style={{fontSize: "25px"}}></i></a></li>
                    <li><a href='#'><i className="bi bi-google text-secondary" style={{fontSize: "25px"}}></i></a></li>
                </ul>

            </div>
        <div className="email-container">
            <p>Your_email@example.com</p>
        </div>

        <main>
            <p className="hi_name">Hi, my name is</p>
            <h1 className="text-white">Sai Manohar</h1>
            <h2><Typewriter options={{
                autoStart : true,
                loop : true,
                delay : 180,
                strings : ["I build things for web","I am a web developer"]
            }}/></h2>
            <p className="detail">
            Software engineering is an engineering-style system of software development.<br /> 
            A software engineer is a person who applies the principles of software engineering <br />
            to design, develop, maintain, test, and evaluate computer software.
            </p>
            <p>
                <button className="bg-transparent">Check out more</button>
            </p>

        </main>

        </div>
    )
}

export default Home