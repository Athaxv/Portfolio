import React from 'react';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';


const Firstsection = () => {
  return (
    <section className="profile">
        <div className="section-profileimg">
            <img src="../assets/profile-pic.png" alt="It's me" />
        </div>
        <div className="section-text">
            <p className="section-text-p1">Hello, I'm</p>
            <h1 className="title">Atharv Gaur</h1>
            <p className="section-text-p2">MERN Stack Developer</p>
            <div className="btn-container">
                <button className="btn btn-color-2" onClick={() => window.open('./assets/resume-example.pdf')}>Download</button>
                <button className="btn btn-color-1" onClick={() => location.href="./#contact"}>Contact Info</button>
            </div>
            <div className="socials-container">
              <img src={githubLogo} alt="My Linkeldn Profile" className="icon" onClick={() => location.href="www.linkedin.com/in/atharv-gaur-5b4243305"} />
              <img src={linkedinLogo} alt="My Github" className="icon" onClick={() => location.href="https://github.com/Athaxv"} />
            </div>
        </div>
    </section>
  )
}

export default Firstsection
