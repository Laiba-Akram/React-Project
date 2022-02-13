import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibilty.css';

const Possibilty = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Artificial intelligence (AI) is the ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because they require human intelligence and discernment.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibilty;