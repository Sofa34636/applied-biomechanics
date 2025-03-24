import React from 'react';
import flower_requests from '../../../images/flower-requests.svg';
import { PriceList } from './PriceList';
import { TechniquesSession } from './TechniquesSession';
import { Get } from './Get';
import { WorkingMethods } from './WorkingMethods';
import { Request } from './Request';

export function Services() {
  return (
    <div className='services'>
      <div className='container-fluid'>
        <div class='services__inner-bg'>
          <p className='top__text services__text-bg'>Услуги</p>
        </div>
      </div>
      <div className='container services__container-bloc'>
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
      <Request />
      <div className='duote container-fluid'>
        <p className='bloc__duote'>
          Возможность В определении точки входа для работы с внутренними конфликтами, мешающими
          развитию.
        </p>
      </div>
      <PriceList />
      <TechniquesSession />
      {/* <Get />
      <WorkingMethods /> */}
    </div>
  );
}
