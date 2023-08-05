import React from 'react';

import './Laurels.css';
import { images,data } from '../../constants';
import { SubHeading } from '../../components';

const AwardCard =({award:{imgUrl,title,subtitle}})=>(
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="" />
    <div className="app__laurels_awards-card_content">
      <p className='p__cormorant'style={{color:"#DCCA87"}}>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
)
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper-info">
    <SubHeading title="Awards & recognition"/>
      <h1 className='headtext__cormorant'> Our laurels</h1>
      <div className="app__laurels-award">
        {
          data.awards.map((award)=> <AwardCard award={award } key={award.title}/>)
        }
      </div>
    </div>
    <div className="app__wrapper-img">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
