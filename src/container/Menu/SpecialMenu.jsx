import React from 'react';

import './SpecialMenu.css';
import { images,data } from '../../constants';
import { SubHeading,MenuItem } from '../../components';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
  <div className="app__special-title">
    <SubHeading title="Menu That Fits You Palatte"/>
    <h1 className='headtext__cormorant'>Today's Special</h1>
  </div>
  <div className="app__specialMenu-menu">
  <div className="app__specialMenu-menu_wine flex__center">
    <p className='app__specialMenu_menu_heaading'>Wine & Beer</p>
    <div className="app__specialMenu_menu_Item">
      {data.wines.map((wine,index)=>(
        <MenuItem key={wine.tags + index} price={wine.price} title={wine.title} tags={wine.tags} />
      ))}
    </div>
  </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>
        <div className="app__specialMenu-menu_cocktails flex__center">
    <p className='app__specialMenu_menu_heaading'>Cocktails</p>
    <div className="app__specialMenu_menu_Item">
      {data.cocktails.map((cocktail,index)=>(
        <MenuItem key={cocktail.tags + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
      ))}
    </div>
  </div>
  </div>
  <div style={{marginTop:"15px"}}>
    <button type='button' className='custom__button'>View More</button>
  </div>
  </div>
);

export default SpecialMenu;
