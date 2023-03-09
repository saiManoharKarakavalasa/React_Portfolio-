import React from "react"
import './Projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function Projects(){
    
    useEffect(() =>{
        AOS.init({duration : 1500})
    },[])

    return(
        <div id ="projects"className="bg-dark w-100 projects">
            <div className="container">
                <h3 className="px-5 pt-5 text-white"><span>03.</span>Projects</h3>
  <div class="row row-cols-1 row-cols-md-3 g-4 px-5 text-center">
  <div class="col" data-aos="fade-right">
    <div class="card">
      <img src="/logo512.png" class="card-img-top" alt="..." />
      <div class="card-body bg-dark">
        <h5 class="card-title">Project 01</h5>
        <p class="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button className="bg-transparent">Load More</button>
      </div>
    </div>
  </div>
  <div class="col" data-aos="zoom-in">
    <div class="card">
      <img src="/logo512.png" class="card-img-top" alt="..." />
      <div class="card-body bg-dark">
        <h5 class="card-title">Project 02</h5>
        <p class="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className="bg-transparent">Load More</button>

          </div>
    </div>
  </div>
  <div class="col" data-aos="fade-left">
    <div class="card">
      <img src="/logo512.png" class="card-img-top" alt="..." />
      <div class="card-body bg-dark">
        <h5 class="card-title">Project 03</h5>
        <p class="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button className="bg-transparent">Load More</button>
      </div>
    </div>
  </div>
  <div class="col" data-aos="fade-left">
    <div class="card">
      <img src="/logo512.png" class="card-img-top" alt="..." />
      <div class="card-body bg-dark">
        <h5 class="card-title">Project 04</h5>
        <p class="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className="bg-transparent">Load More</button>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    )
}

export default Projects