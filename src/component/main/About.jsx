import about_img from '../../images/about-img.svg';

import React from 'react';

export function About() {
  return (
    <div className='about'>
      <div className='container'>
        <p className='bloc__title'>Обо мне</p>
        <div className='about__inner'>
          <div className='about__bloc'>
            <p className='about__name'>Я — Оксана Рыбалкина,</p>
            <p className='about__text-item'>
              Специалист по работе с телом и массажист с глубокими знаниями его возможностей.
            </p>
            <p className='about__text'>
              Я изучала связь между телом и психикой в Московской школе нейрорелаксации, что
              позволило мне развить подход, сочетающий массаж и биомеханику.{' '}
            </p>
            <p className='about__text-item'>
              Мой подход сочетает массаж и биомеханику, позволяя клиентам осознать активные и
              неактивные мышцы.{' '}
            </p>
          </div>
          <img src={about_img} alt='' />
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
