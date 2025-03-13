import React from 'react';
import flower_requests from '../../../images/flower-requests.svg';
import { PriceList } from './PriceList';
import { TechniquesSession } from './TechniquesSession';
import { Get } from './Get';
import { WorkingMethods } from './WorkingMethods';

export function Services() {
  return (
    <div className='services'>
      <div className='container'>
        <p className='bloc__title'>Услуги</p>
        <p className='bloc__text'>Психологический запрос</p>
        <p className='bloc__subtext'>
          Психологический запрос — это выражение внутренней потребности в изменениях, возникающее
          при трудностях.
          <p>
            Нам часто трудно взглянуть на ситуацию со стороны, что вызывает вопросы о том, что
            улучшить для достижения целей, таких как работа или семья.
          </p>
        </p>
      </div>
      <div className='duote container-fluid'>
        <p className='bloc__duote'>
          Важно определить точку входа для работы с внутренними конфликтами, мешающими развитию.
        </p>
      </div>
      <div className='container'>
        <div className='services__inner'>
          <div className='services__item services__item-1'>
            <p className='services__petal'>Эмоциональные состояния</p>
            <p className='services__petal'>Физическая боль</p>
          </div>
          <div className='services__item services__item-2'>
            <p className='services__petal'>Жизненные ситуации</p>
            <img src={flower_requests} alt='' />
          </div>
          <div className='services__item services__item-3'>
            <p className='services__petal'>Психосоматические проявления</p>
            <p className='services__petal'>Запросы на улучшение состояния</p>
          </div>
        </div>
      </div>
      <div className='duote container-fluid'>
        <p className='bloc__duote'>
          Важно определить точку входа для работы с внутренними конфликтами, мешающими развитию.
        </p>
      </div>
      <PriceList />
      <TechniquesSession />
      <Get />
      <WorkingMethods />
    </div>
  );
}
