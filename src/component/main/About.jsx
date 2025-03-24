import about_img from '../../images/about-img.svg';

import React from 'react';

export function About() {
  return (
    <div>
      <div className='about'>
        <div className='container'>
          <p className='top__text'>Обо мне</p>
          <div className='about__inner '>
            <div className='about__bloc'>
              <p className='about__name item__title'>
                Я — специалист по работе с телом, обладающий глубокими знаниями его возможностей.{' '}
              </p>
              <div class='item__text'>
                <p className='about__text-item'>
                  Изучала массажные техники в Московском институте нейрорелаксации "Мир",
                  телесноориентированную психологию при академии Невельского.{' '}
                </p>
                <p className='about__text'>
                  Я изучала связь между телом и психикой в Московской школе нейрорелаксации, что
                  позволило мне развить подход, сочетающий массаж и биомеханику.{' '}
                </p>
                <p className='about__text-item'>
                  Основы прикладной биомеханики тела по методу Сергея Биленко.
                </p>
                <p className='about__text'>
                  Использую бодинамику по теории Лизбет Марчер, что позволяет проводить сессии для
                  тех, кто стремится улучшить своё психоэмоциональное состояние и обрести опору в
                  социальной жизни.{' '}
                </p>
              </div>
            </div>
            <img className='about__img' src={about_img} alt='' />
          </div>
        </div>
      </div>
      <div className='duote container-fluid'>
        <p className='bloc__duote'>
          Приглашаю вас на индивидуальную встречу для восстановления связи и доверия к своему телу.
        </p>
      </div>
    </div>
  );
}
