import React from 'react';
import therapy_img from '../../../images/therapy-img.svg';

export function Therapy() {
  return (
    <div className='therapy'>
      <div className='container'>
        <div class='therapy__inner'>
          <div class='therapy__bloc'>
            <div class='therapy__item therapy__right'>
              <p class='therapy__title'>Гармония</p>
              <p class='therapy__text '>
                Восстанавливает баланс в физическом и эмоциональном плане.
              </p>
            </div>
            <div class='therapy__item therapy__right'>
              <p class='therapy__title'>Гармония</p>
              <p class='therapy__text'>
                Восстанавливает баланс в физическом и эмоциональном плане.
              </p>
            </div>
          </div>
          <img class='therapy__img' src={therapy_img} alt='' />
          <div class='therapy__center'>
            <div class='therapy__item '>
              <p class='therapy__title'>Гармония</p>
              <p class='therapy__text'>
                Восстанавливает баланс в физическом и эмоциональном плане.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
