import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's  Word"/>
      <h1 className='headtext__cormorant'>What We Believe in</h1>

      <div className='app__chef-content'>
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="about quote" />
          <p className='p__opensans para'>Lorem ipsum dolor sit amet consectetur adipisicing elit auctor sit.</p>
          
        </div>
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, accusantium porro? Ea voluptatum, adipisci, nostrum at optio enim recusandae quo dolorem exercitationem accusamus, temporibus perspiciatis ipsam atque ullam..</p>
        <div className="app__chef-sign">
          <p>Kevin Lou</p>
          <p className='p__opensans'>Chef & founder</p>
          <img src={images.sign} alt="chef signature" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
