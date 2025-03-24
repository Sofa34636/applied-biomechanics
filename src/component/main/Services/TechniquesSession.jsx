import React from 'react';
import flower_techniques from '../../../images/flower-techniques.svg';

export function TechniquesSession() {
  return (
    <div className='TechniquesSession '>
      <div className='container'>
        <div className='TechniquesSession__inner '>
          <div class='item__flower'>
            <img src={flower_techniques} alt='' />
          </div>
          <p className='TechniquesSession__title item__petal'>Техники, используемые на сеансах</p>
        </div>
      </div>
    </div>
  );
}
