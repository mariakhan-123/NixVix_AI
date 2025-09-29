import React from 'react'
import './Contact.css'
import contactIcon from '../assets/contactIcon.png'
import emailIcon from '../assets/emailIcon.png'
import locationIcon from '../assets/locationIcon.png'
function Contact({ alt }) {
  return (
    <div>
      <section className="contact-section">
        <div className={alt ? "contact-box-alt" : "contact-box"}>
          
          {alt ? (
            <>
              {/* Left column: Info */}
              <div className="contact-left">
                <h2 className="heading2" style={{textAlign:"left"}}>Contact</h2>
                <p>Let’s Build the Future of AI Together</p>

               <div className="contact-info">
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
                 <img src={emailIcon}/>
              </span>
              <span>Email: hello@nixvix.ai</span>
            </div>
          </div>
              </div>

              {/* Right column: Form */}
              <div className="contact-right">
                <form className="contact-form-alt">
                  {/* Row 1: Name + Email */}
                  <div className="form-row">
                    <input type="text" placeholder="Name *" required />
                    <input type="email" placeholder="Email *" required />
                  </div>

                  {/* Row 2: Company + Country */}
                  <div className="form-row">
                    <input type="text" placeholder="Company *" required />
                    <input type="text" placeholder="Country *" required />
                  </div>

                  {/* Row 3: Requirement */}
                  <div className="form-row row-single">
                    <select required>
                      <option value="">Choose Your Requirement *</option>
                      <option value="ai">AI Solutions</option>
                      <option value="consulting">Consulting</option>
                      <option value="support">Support</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div className="form-row row-single">
                    <textarea placeholder="Message *" required></textarea>
                  </div>

                  {/* Row 5: Consent */}
                  <div className="form-consent">
                    <input type="checkbox" id="consent" />
                    <label htmlFor="consent">
                      I Have Reviewed The <a href="/">Privacy Policy</a> And Give My Consent To The Sending Of Messages.
                    </label>
                  </div>

                  {/* Row 6: Submit */}
                  <button type="submit" className="submit-btn">
                    Submit <span>→</span>
                  </button>
                </form>
              </div>
            </>
          ) : (
            /* ============= DEFAULT LAYOUT ============= */
            <>
              <h2 className='heading2'>Contact</h2>
              <p>Let’s Build the Future of AI Together</p>
              <form className="contact-form">
                <div className="form-left">
                  <div className="form-row">
                    <input type="text" placeholder="Name *" required />
                    <input type="email" placeholder="Email *" required />
                  </div>
                  <div className="form-row">
                    <input type="text" placeholder="Company *" required />
                    <input type="text" placeholder="Country *" required />
                  </div>
                  <div className="form-row">
                    <select required>
                      <option value="">Choose Your Requirement *</option>
                      <option value="ai">AI Solutions</option>
                      <option value="consulting">Consulting</option>
                      <option value="support">Support</option>
                    </select>
                  </div>

                  <div className="form-consent">
                    <input type="checkbox" id="consent" />
                    <label htmlFor="consent">
                      I Have Reviewed The <a href="/">Privacy Policy</a> And Give My Consent To The Sending Of Messages.
                    </label>
                  </div>
                </div>

                <div className="form-right">
                  <textarea placeholder="Message *" required></textarea>
                  <button type="submit" className="submit-btn">
                    Submit <span>→</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Contact
