import React from 'react';
import bar1 from '../../../images/bar1.png';
import bar2 from '../../../images/bar2.png';
import bar3 from '../../../images/bar3.png';
import post_session from '../../../images/post-session.png';

export function Bars() {
  return (
    <section className='bars'>
      <div className='container'>
        <p className='top__text'>Аксесс Бары</p>
        <p className='bloc__text'>Генеральная уборка для ума и тела!</p>
        <div class='bars__inner '>
          <div class='biodynamic__section'>
            <div class='bars__bloc'>
              <p class='biodynamic__title item__title'>
                Метод Аксесс Бары — это мануальная техника, основанная на работе с 32 точками на
                голове, которые связаны с различными аспектами жизни, эмоциями и убеждениями.{' '}
              </p>
              <p class='biodynamic__title item__title'>
                «Бары» активируют потоки энергии, очищая ум и освобождая от ненужных мыслей и
                эмоций, что приводит к лёгкости и внутренней свободе.{' '}
              </p>
              <p class='biodynamic__title item__title'>
                Во время сессии специалист мягко касается этих точек, высвобождая заблокированную
                энергию и снижая напряжение.
              </p>
              <p class='biodynamic__title item__title'>Вот примеры тем, с которыми связаны бары:</p>

              <div class='item__text'>
                <p class='biodynamic__text'>Вот примеры тем, с которыми связаны бары:</p>
                <p class='biodynamic__text'>Деньги и контроль</p>
                <p class='biodynamic__text'>Тело и здоровье</p>
                <p class='biodynamic__text'>Творчество</p>
                <p class='biodynamic__text'>Радость и печаль</p>
                <p class='biodynamic__text'>Коммуникация</p>
                <p class='biodynamic__text'>Секс и отношения</p>
                <p class='biodynamic__text'>Сознание</p>
                <p class='biodynamic__text'>Мечты и надежды</p>
                <p class='biodynamic__text'>Собственные точки зрения и суждения</p>
                <p class='biodynamic__text'>Скорбь, гнев, страх, вина и другие эмоции</p>
              </div>
            </div>
          </div>
          <div class='bars__images'>
            <img class='biodynamic__img' src={bar1} alt='' />
            <div class='bars__img'>
              <img class='biodynamic__img2' src={bar2} alt='' />

              <img class='biodynamic__img2' src={bar3} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div class='bars_post_session'>
          <div className='container'>
            <div class='bars_session'>
              <img class='' src={post_session} alt='' />
              <p class='top__session'>Состояние после сеанса</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
