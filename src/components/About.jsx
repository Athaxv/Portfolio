import React from 'react'
import profilepic2 from '../assets/WhatsApp Image 2024-10-16 at 21.44.30_edf18396.jpg'
import Experience from '../assets/experience.png'
import Education from '../assets/education.png'
import Arrow from '../assets/arrow.png'


const About = () => {
  return (
    <section className='about mt-10 '>
        <p className='section-text-p1'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section-container md:flex '>
            <div className='section-profileimg w-[1000px]'>
                <img src={profilepic2} alt="ProfilePic" className='about-pic' />
            </div>
            <div className="about-details-container">
                <div className="about-containers">
                    <div className="details-container h-40">
                        <img src={Experience} alt="Experience" className='icon' />
                        <h3>Experience</h3>
                        <p>2+ <br />Frontend Development</p>
                    </div>
                    <div className="details-container h-40">
                        <img src={Education} alt="Edunction" className='icon' />
                        <h3>Education</h3>
                        <p>BTECH <br />Bachelor of Technology</p>
                    </div>
                </div>
                <div className="text-container">
                    <p>
                    Hey, I am Atharv Gaur, a sophomore student and a passionate Full Stack Developer at MSIT. My skills extend across both frontend and backend domains, allowing me to build dynamic and responsive web applications. On the frontend, I am proficient in MERN Stack creating intuitive and visually appealing user interfaces. On the backend, I excel in technologies like JWT, Bcrypt, socket.io, and NextJS, developing robust and efficient server-side logic.   
                    </p>
                </div>
            </div>
        </div>
        <img src={Arrow} alt="arrow icon" className='icon arrow' onClick={() => location.href='./#experience'} />
    </section>
  )
}

export default About

 
   