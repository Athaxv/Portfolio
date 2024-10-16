import React from 'react'
import Checkmark from '../assets/checkmark.png'
import Arrow from '../assets/arrow.png'

const Experience = () => {
  return (
    <section className='experience'>
        <p className='section-text-p1'>Explore My</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
            <div className="about-containers">
                <div className="details-container">
                    <h2 className='experience-sub-title'>Frontend Development</h2>
                    <div className="article-container">
                        <article>
                            <img src={Checkmark} alt="Experience.icon"  className='icon'/>
                            <div>
                                <h3>HTML</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src={Checkmark} alt="Experience.icon"  className='icon'/>
                            <div>
                                <h3>CSS</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src={Checkmark} alt="Experience.icon"  className='icon'/>
                            <div>
                                <h3>Javascript</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src={Checkmark} alt="Experience.icon" className='icon' />
                            <div>
                                <h3>React</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="details-container">
                    <h2 className='experience-sub-title'>Backend Development</h2>
                    <div className="article-container">
                        <article>
                            <img src={Checkmark} alt="Experience.icon" className='icon' />
                            <div>
                                <h3>NodeJS</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src={Checkmark} alt="Experience.icon" className='icon' />
                            <div>
                                <h3>Express</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src={Checkmark} alt="Experience.icon" className='icon' />
                            <div>
                                <h3>MongoDB</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src={Checkmark} alt="Experience.icon" className='icon' />
                            <div>
                                <h3>Git</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <img src={Arrow} alt="arrow icon" className='icon arrow' onClick={() => location.href='./#experience'} />
    </section>
  )
}

export default Experience
