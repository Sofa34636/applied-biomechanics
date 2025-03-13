import biodynamic_img from '../../images/biodynamics-img.svg';
import biodynamic_img2 from '../../images/biodynamics-img2.svg';

import React from 'react';
export function Biodynamics() {
  return (
    <div className='biodynamic'>
      <div className='container'>
        <p className='bloc__title'>Услуги</p>
        <p className='bloc__text'>Психологический запрос</p>
        <div class='biodynamic__inner'>
          <div class='biodynamic__section'>
            <div class='biodynamic__bloc'>
              <p class='biodynamic__title'>Как это работает?</p>
              <p class='biodynamic__text'>
                Каждая эмоция отражается в нашем физическом состоянии: в мышцах, позе и движениях.
                Например:
              </p>
              <p class='biodynamic__text'>Сжатие в плечах — напряжение или ответственность.</p>
              <p class='biodynamic__text'>Напряжение в животе — страх или подавленные эмоции.</p>
              <p class='biodynamic__text'>Ограничения в движениях рук — трудности в принятии.</p>
            </div>
            <div class='biodynamic__bloc'>
              <p class='biodynamic__title'>Какие результаты можно получить с помощью бодинамики?</p>
              <p class='biodynamic__text'>Освобождение от напряжения.</p>
              <p class='biodynamic__text'>Понимание влияния эмоций на тело.</p>
              <p class='biodynamic__text'>Улучшение физического и эмоционального состояния.</p>
              <p class='biodynamic__text'>Восстановление гармонии тела и разума.</p>
            </div>
            <div class='biodynamic__bloc'>
              <p class='biodynamic__title'>Почему это важно?</p>
              <p class='biodynamic__text'>
                Бодинамика устраняет глубинные причины дискомфорта предлагая путь к осознанности и
                гармонии, а не просто временное облегчение.
              </p>
            </div>
          </div>
          <div class='biodynamic__images'>
            <img class='biodynamic__img' src={biodynamic_img} alt='' />
            <img class='biodynamic__img' src={biodynamic_img2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
