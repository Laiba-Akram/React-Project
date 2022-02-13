import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';
const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text" >Let&apos;s Build Something amazing with Laiba Akram</h1>
      <p>We are team of talanted designers and developers making websites projects and templates.</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button className="btn-3" type="button">Get Started</button>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);
export default Header;