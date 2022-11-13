import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';

function Maps() {
	return (
      
      <YMaps>
        <div className='maps__wrapper'>
          <div className='maps__info'>
            <div className='maps__info_blck'>
              <span className='blck__title'>Working Hour</span>
              <span className='blck__discription'>Sunday to Saturday  
              09:00 AM to 11:00 PM</span>
            </div>
            <div className='maps__info_blck'>
              <span className='blck__title'>Location</span>
              <span className='blck__discription'>Street - 127, New York, United States
              546544</span>
            </div>
            <div className='maps__info_blck'>
              <span className='blck__title'>Contact us </span>
              <span className='blck__discription'>+123456789
              hey@yourdomain.com</span>
            </div>
          </div>
          <Map className='maps' defaultState={{ center: [53.89706974885733,27.52791741534421], zoom: 17}} /> 
        </div>
    
      </YMaps>
	);
}

export default Maps;


