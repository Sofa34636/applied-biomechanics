import biodynamic_img from '../../images/biodynamics-img.svg';
import biodynamic_img2 from '../../images/biodynamics-img2.svg';

import React from 'react';
export function Biodynamics() {
  return (
    <div className='biodynamic'>
      <div className='container'>
        <p className='top__text'>Бодинамика</p>
        <p className='bloc__text'>
          Метод, который помогает выявить и устранить эмоциональные блоки, проявляющиеся в теле.{' '}
        </p>
        <div class='biodynamic__inner '>
          <div class='biodynamic__section'>
            <div class='biodynamic__section-bloc'>
              <div class='biodynamic__bloc'>
                <p class='biodynamic__title item__title'>Как это работает?</p>

                <div class='item__text'>
                  <p class='biodynamic__text'>
                    Каждая эмоция отражается в нашем физическом состоянии: в мышцах, позе и
                    движениях. Например:
                  </p>
                  <p class='biodynamic__text'>Сжатие в плечах — напряжение или ответственность.</p>
                  <p class='biodynamic__text'>
                    Напряжение в животе — страх или подавленные эмоции.
                  </p>
                  <p class='biodynamic__text'>
                    Ограничения в движениях рук — трудности в принятии.
                  </p>
                </div>
              </div>
              <div class='biodynamic__bloc'>
                <p class='biodynamic__title item__title'>
                  Какие результаты можно получить с помощью бодинамики?
                </p>
                <div class='item__text'>
                  <p class='biodynamic__text'>Освобождение от напряжения.</p>
                  <p class='biodynamic__text'>Понимание влияния эмоций на тело.</p>
                  <p class='biodynamic__text'>Улучшение физического и эмоционального состояния.</p>
                  <p class='biodynamic__text'>Восстановление гармонии тела и разума.</p>
                </div>
              </div>
            </div>
            <div class='biodynamic__bloc biodynamic__bloc-center'>
              <p class='biodynamic__title item__title'>Почему это важно?</p>
              <p class='biodynamic__text item__text'>
                Бодинамика устраняет глубинные причины дискомфорта предлагая путь к осознанности и
                гармонии, а не просто временное облегчение.
              </p>
            </div>
          </div>
          <div class='biodynamic__images'>
            <img class='biodynamic__img' src={biodynamic_img} alt='' />
            <img class='biodynamic__img2' src={biodynamic_img2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
