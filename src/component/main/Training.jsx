import React from 'react';
import training_img from '../../images/training-img.svg';

export function Training() {
  return (
    <div className='training'>
      <div className='container'>
        <p className='bloc__title'>Обучение</p>
        <div className='training__inner'>
          <div className='training__bloc'>
            <p class='training__text'>огненный массаж</p>
            <img src={training_img} alt='' />
            {/* <div class="p">текст</div> */}
          </div>
          <div className='training__bloc'>
            <p class='training__text'>нейрорелаксация маслом</p>
            <img src={training_img} alt='' />
          </div>
          <div className='training__bloc'>
            <p class='training__text'>нейрорелаксация маслом</p>
            <img src={training_img} alt='' />
          </div>
          <div className='training__bloc'>
            <p class='training__text'>криольский массаж</p>
            <img src={training_img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
