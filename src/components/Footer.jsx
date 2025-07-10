import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo3.png'

const Footer = () => {
  return (
    <div>
        <footer className="footer sm:footer-horizontal bg-[#9cd2f693] text-base-content p-10">
  <aside>
    <div>
                        <img src={logo} alt="Logo" className='h-20 w-auto object-contain' />
                    </div>
    <p>
      Campus Mart
      <br />
      Your Trusted Campus Marketplace!!
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">About Us</h6>
    <Link to= './aboutus' className="link link-hover">About CampusMart </Link>
    <Link to='/terms' className="link link-hover">Terms and Conditions</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">Contact Us</a>
    <Link to='/tips' className="link link-hover">Safety Tips</Link>
    <Link to='/Faqs' className="link link-hover">FAQs</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">LinkedIn</a>
    <a className="link link-hover">Facebook</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer