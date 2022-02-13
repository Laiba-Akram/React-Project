import React from 'react';
import techskills from '../../assets/techskills.jpg';
import { RiArrowUpLine } from 'react-icons/ri';
import './footer.css';

  

const Footer = () => (


  <div className="gpt3__footer section__padding"> 
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>
<div className='blob'></div>
<div className='blob2'></div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={techskills} alt="gpt3_logo" />
        <p>Laiba Akram, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Youtube, facebook, Instagaram</p>
        <p>00-00-00</p>
        <p>info@LaibaAkram</p>
      </div>
    </div>
  
     <a href="#" class="back-to-top"><RiArrowUpLine  color="#fff" size={27}/></a>
      

    <div className="gpt3__footer-copyright">
      <p>@2021 Laiba Akram. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;