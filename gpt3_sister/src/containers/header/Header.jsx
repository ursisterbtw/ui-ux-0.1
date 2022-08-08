import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">are you allergic to ethereum?</h1>
      <p>
        GPT-3 fixes this!
      </p>
      <p>
        fill out the email field below so we can file a class action against the guy that owns it.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">GET REKT</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600+ people have lost their life savings thanks to monkey JPEGs</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;