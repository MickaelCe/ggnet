import React from 'react'
import '../../components-css/Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="container__form">
        <h1>Contact Us</h1>
        <div className="form">
          <form>
            <input
              className="form-control"
              type="text"
              id="name"
              aria-label="Name"
              placeholder="Your Name *"
              required
            />
            <input
              className="form-control"
              type="email"
              id="mail"
              aria-label="Email"
              placeholder="Your Email *"
              required
            />
            <input
              className="form-control"
              type="tel"
              id="tel"
              aria-label="Phone Number"
              placeholder="Your Number *"
              required
            />
            <textarea
              className="message form-control"
              id="msg"
              aria-label="Message"
              placeholder="Your Message *"
              required
            ></textarea>
            <button type="submit" className="btn  form-control">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact