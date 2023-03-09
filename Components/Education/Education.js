import React from "react";
import 'bootstrap/js/dist/tab'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import './Education.css'

function Education(){

   useEffect(() =>{
    AOS.init({duration : 1500})
},[])


    return(
     <div id="education" className="w-100 vh-100 d-flex flex-coloumn align-items-center justify-content-center bg-dark">
        <div className="w-50 text-white edu" data-aos ="zoom-in">
            <h3><span>02.</span>My Education</h3>
        <div class="d-flex mt-5 text-white education">
  <div class="nav flex-column nav-pills me-3 border-start" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active text-white" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">01</button>
    <button class="nav-link text-white" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">02</button>
    <button class="nav-link text-white" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">03</button>
    <button class="nav-link text-white" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">04</button>
  </div>
  <div class="tab-content tabs-detail ms-3" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <h5>Engineering @ <a href="#"></a></h5>
        <span>date-2020 - date-2022</span>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    <h5>Engineering 1 <a href="#"></a></h5>
        <span>date-2020 - date-2022</span>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
    </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <h5>Engineering 2 <a href="#"></a></h5>
        <span>date-2020 - date-2022</span>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
    </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <h5>Engineering 3 <a href="#"></a></h5>
        <span>date-2020 - date-2022</span>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
        <p className="text-white">
            <span>*</span>
            A college is an educational institution or a constituent part of one
        </p>
    </div>
  </div>
</div>
</div>
</div>
    )
}

export default Education