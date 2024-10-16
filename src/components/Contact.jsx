import email from '../assets/email.png'
import linkedin from "../assets/linkedin.png"

const Contact = () => {
  return (
    <section className='contact'>
        <p className='section-text-p1'>Get in Touch</p>
        <h1 className='title'>Contact Me</h1>
        <div className="contact-info-upper-container">
            <div className="contact-info-container">
                <img src={email} alt="email icon" className='icon contact-icon' />
                <p><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNvMfPKbXBSHxzVRhpwHQDJXHgthPrWNGpwZMnXJprBTKfDftNDjKKJTjHgrDHFKKtdwBB">laatharv@gmail.com</a></p>
            </div>
       
            <div className="contact-info-container">
                <img src={linkedin} alt="email icon" className='icon contact-icon' />
                <p><a href="https://www.linkedin.com/in/atharv-gaur-5b4243305">LinkedIn</a></p>
            </div>
            </div>
    </section>
  )
}

export default Contact
