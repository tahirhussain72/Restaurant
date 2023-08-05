import React,{useRef} from 'react';

import './Gallery.css';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { images} from '../../constants';
import { SubHeading } from '../../components';
// import { useReducer } from 'react';
const galleryimages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  const scrollRef= useRef(null)
  const scroll = (direction)=>{
    const {current} =  scrollRef;
    if (direction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft += 300;
    }
  }
  return(
  <div className='app__gallery flex__center'>
  <div className="app__gallery-content">
    <SubHeading title="Instagram"/>
    <h1 className='headtext__cormorant'>photo gallery</h1>
    <p className='p__opensans' style={{color:'#AAA', margonTop:"2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias eum dicta, nam vero sunt.</p>
    <button type='button' className='custom__button'>View More</button>
  </div>
  <div className="app__gallery-images">
    <div className="app__gallery-images_container" ref={scrollRef}>
      {
        galleryimages.map((image,index)=>(
          <div className='app__gallery-images-card flex__center' key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery images" />
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))
      }
    </div>
    <div className='app__gallery-images_arrow'>
    <BsArrowLeftShort className='gallery_arrow-icons' onClick={()=> scroll("left")}/>
    <BsArrowRightShort className='gallery_arrow-icons' onClick={()=> scroll("right")}/>

    </div>
  </div>
 
  </div>
);
}

export default Gallery;
