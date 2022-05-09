import React from 'react'
import "../components-css/Footer.css"
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
      <footer className="site-footer">
        <div className="container___links">
            <div className="About___section">
              <h6 className='active'>About</h6>
              <p className="text-justify">GamerGate est un petit projet perso ayant pour but d'apprendre l'utilisation de ReactJS.</p>
            </div>

            <div className="Links___section">
              <h6 className='active'>Quick Links</h6>
              <ul className="footer-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
        </div>
        <div className="container___copyright">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by - 
                <a href="https://github.com/MickaelCe" target="blank_">Mickael</a>.
               </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" target="blank_" href="https://www.linkedin.com/in/mickaelcecen/"><BsLinkedin /></a></li>
                <li><a className="linkedin" target="blank_" href="https://github.com/MickaelCe"><BsGithub className='linkedin'/></a></li>   
              </ul>
            </div>
        </div>
  </footer>
  )
}

export default Footer