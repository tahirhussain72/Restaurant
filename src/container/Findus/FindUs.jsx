import React from 'react';
import { images} from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper-info">
    <SubHeading title="contact"/>
    <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}}>find us</h1>

    <div className='app__wrapper-content'>
        <p className='p__opensans'>lane ends bungalow, whatcroft hall lane ,CW9 75G</p>
        {/* <p className='p__cormorant'>Opening Hours</p> */}
        <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>mon - fri: 10:00 am - 12:00 am </p>
        <p className='p__opensans'>sat - sun: 10:00 am - 3:00 am </p>
    </div>
        <button type='button' className='custom__button' style={{margin:'2rem 0'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
