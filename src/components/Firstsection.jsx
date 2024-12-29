import React from 'react';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import Profilepic from '../assets/profile-pic.png'
import aws from "../assets/WhatsApp Image 2024-10-15 at 22.44.56_fbc35a0d.jpg"

const Firstsection = () => {
  return (
    <section className="profile">
        <div className="section-profileimg">
            <img src={aws} className='sec-img' alt="It's me" />
        </div>
        <div className="section-text">
            <p className="section-text-p1">Hello, I'm</p>
            <h1 className="title">Atharv Gaur</h1>
            <p className="section-text-p2">MERN Stack Developer</p>
            <div className="btn-container">
                <button className="btn btn-color-2" onClick={() => location.href="https://github.com/Athaxv"}>GitHub</button>
                <button className="btn btn-color-1" onClick={() =>  window.open("/Resume.pdf", "_blank")}>Resume</button>
            </div>
            <div className="socials-container">
              <img src={githubLogo} alt="My Linkeldn Profile" className="icon" onClick={() => location.href="https://github.com/Athaxv"} />
              <img src={linkedinLogo} alt="My Github" className="icon" onClick={() => location.href=""} />
            </div>
        </div>
    </section>
  )
}

export default Firstsection
