import React from 'react';
import therapy_img from '../../../images/therapy-img.svg';

export function Therapy() {
  return (
    <div className='therapy'>
      <div className='container white__box'>
        <div class='therapy__inner'>
          <div class='therapy__bloc'>
            <div class='therapy__item therapy__right'>
              <p class='therapy__title item__title'>Гармония</p>
              <p class='therapy__text item__text'>
                Восстанавливает баланс в физическом и эмоциональном плане.
              </p>
            </div>
            <div class='therapy__item therapy__right'>
              <p class='therapy__title item__title'>Массаж</p>
              <p class='therapy__text item__text'>
                Восстанавливает правильное движение и снимает физическое напряжение.{' '}
              </p>
            </div>
          </div>
          <img class='therapy__img' src={therapy_img} alt='' />
          <div class='therapy__center'>
            <div class='therapy__item '>
              <p class='therapy__title item__title'>Терапия</p>
              <p class='therapy__text item__text'>
                Устраняет причины боли и дискомфорта, учитывая эмоциональное состояние.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
