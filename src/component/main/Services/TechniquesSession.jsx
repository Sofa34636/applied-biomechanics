import React from 'react';
import flower_techniques from '../../../images/flower-techniques.svg';

export function TechniquesSession() {
  return (
    <div className='TechniquesSession'>
      <div className='container'>
        <div className='TechniquesSession__inner'>
          <img src={flower_techniques} alt='' />
          <p className='TechniquesSession__title'>Техники, используемые на сеансах</p>
        </div>
      </div>
    </div>
  );
}
