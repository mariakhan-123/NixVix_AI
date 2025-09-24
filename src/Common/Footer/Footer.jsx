import React from 'react'
import Logo from '../../assets/FooterLogo.png'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="polygon">
        <div className="footer-box">
          <div className="footer-left">
            <img src={Logo} alt="Nixense Vixion" className="footer-logo" />
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
                {/* pin icon */}
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#000" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
              </span>
              <span>Location : Lahore, Pakistan</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#000" d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21 3 13.93 3 4.5A1 1 0 0 1 4 3.5H7.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.05l-2.21 2.17z" /></svg>
              </span>
              <span>Phone: +92 307 5741522</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#000" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </span>
              <span>Email: hello@nixvix.ai</span>
            </div>
          </div>

          <button
            className="scroll-top"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M12 4l-8 8h5v8h6v-8h5z" />
            </svg>
          </button>
        </div>
        <div className="footer-bottom">Copyright Nixense Vixion.</div>
      </footer>
    </div>
  )
}

export default Footer
