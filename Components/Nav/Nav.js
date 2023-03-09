import React from "react";
import './Nav.css';
import 'bootstrap/js/dist/collapse'

function Nav(){
    return(
        <div className="container">
            <nav class="navbar navbar-expand-md bg-transparent  navbar-dark">
  <a class="navbar-brand text-white" href="#">My Portfolio</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#education">Education</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
      <li class="nav-item">
        <button className='bg-transparent'>Resume</button>
      </li>
    </ul>
    
  </div>
</nav>
        </div>
    )
}

export default Nav