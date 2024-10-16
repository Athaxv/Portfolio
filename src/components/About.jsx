import React from 'react'
import profilepic2 from '../assets/WhatsApp Image 2024-10-16 at 21.44.30_edf18396.jpg'
import Experience from '../assets/experience.png'
import Education from '../assets/education.png'
import Arrow from '../assets/arrow.png'


const About = () => {
  return (
    <section className='about'>
        <p className='section-text-p1'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section-container'>
            <div className='section-profileimg'>
                <img src={profilepic2} alt="ProfilePic" className='about-pic' />
            </div>
            <div className="about-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <img src={Experience} alt="Experience" className='icon' />
                        <h3>Experience</h3>
                        <p>2+ <br />Frontend Development</p>
                    </div>
                    <div className="details-container">
                        <img src={Education} alt="Edunction" className='icon' />
                        <h3>Education</h3>
                        <p>BTECH <br />Bachelor of Technology</p>
                    </div>
                </div>
                <div className="text-container">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis perspiciatis accusantium vero modi aut amet vitae, unde illum! Cumque laudantium dicta officiis minus commodi, molestias dolorem assumenda, repudiandae unde sequi esse sapiente nobis distinctio omnis atque maiores eum quisquam natus in provident autem? Est temporibus id molestias nam consequatur.
                    </p>
                </div>
            </div>
        </div>
        <img src={Arrow} alt="arrow icon" className='icon arrow' onClick={() => location.href='./#experience'} />
    </section>
  )
}

export default About
