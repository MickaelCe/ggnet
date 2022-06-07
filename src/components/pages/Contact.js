import React from 'react'
import '../../components-css/Contact.css';
import img1 from '../../assets/bg1.png'
import img2 from '../../assets/bg2.png'
import img3 from '../../assets/bg3.jpg'
import img4 from '../../assets/bg4.png'

const Contact = () => {

  const rand = Math.floor(Math.random() * 4);
  const bg = {
    background: {
      backgroundImage: Number(rand) === 0 ? `url(${img1}` :  Number(rand) === 1 ? `url(${img2}` : Number(rand) === 2 ? `url(${img3}` : Number(rand) === 3 ? `url(${img4}` : `url(${img4}`,
    }
  };

  return (
    <div className="contact___bg" style={bg.background}>
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