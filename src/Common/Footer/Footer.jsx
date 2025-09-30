import React from 'react'
import Logo from '../../assets/FooterLogo.png'
import './Footer.css'
import contactIcon from '../../assets/contactIcon.png'
import emailIcon from '../../assets/emailIcon.png'
import locationIcon from '../../assets/locationIcon.png'
function Footer() {
  return (
    <div>
    
        <footer className="footer-box">
          <div className='content-box'>
          <div className="footer-left">
            <img src={Logo} alt="Nixense Vixion" className="footer-logo" width="90" height="90"/>
            <span className="brand">Nixense <br /> Vixion</span>
          </div>

          <div className="footer-center">
            <p>
              To be the global catalyst for human-centered AI innovation — shaping a smarter, more connected future, one algorithm at a time.
            </p>
          </div>

          <div className="footer-right">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img src={locationIcon}/>
               </span>
              <span>Location : Lahore, Pakistan</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                 <img src={contactIcon}/>
              </span>
              <span>Phone: +92 307 5741522</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                 <img src={emailIcon} />
              </span>
              <span>Email: hello@nixvix.ai</span>
            </div>
          </div>
    
  </div>
  
        </footer>
                <button className="scroll-top"   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M12 4l-8 8h5v8h6v-8h5z" />
    </svg>
  </button>
        <div className="footer-bottom">Copyright Nixense Vixion.</div>
    
    </div>
  )
}

export default Footer
