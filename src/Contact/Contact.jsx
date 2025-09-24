import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
      <section className="contact-section">
      <div className="contact-box">
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
      </div>
    </section>
    </div>
  )
}

export default Contact
