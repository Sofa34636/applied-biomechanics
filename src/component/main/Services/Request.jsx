import React from 'react';
import flower_get from '../../../images/flower-get.svg';
import flower_requests from '../../../images/flower-requests.svg';

export function Request() {
  return (
    <div class='request'>
      <div className='container'>
        <p className='top__text '>Приветствую тебя, гость моего сайта.</p>
        <p className='bloc__text'>
          <p class=''>Ты здесь, потому что ищешь ответы на свои вопросы.</p>
          <p class=''>Что с моим телом?</p>
          <p class=''>Как долго я буду находиться в депрессии?</p>
          <p class=''>Что мешает мне двигаться в жизни, строить карьеру, отношения?</p>
          <p class=''>Нарушение сна, тревожность.</p>
          <p class=''>Давай знакомиться</p>
        </p>
        <div className='services__inner services__adaptiv item__title'>
          <div className='services__item services__item-1'>
            <p className='services__petal'>Эмоциональные состояния</p>
            <p className='services__petal'>Физическая боль</p>
          </div>
          <div className='services__item services__item-2'>
            <p className='services__petal'>Жизненные ситуации</p>
            <img className='services__img' src={flower_requests} alt='' />
          </div>
          <div className='services__item services__item-3'>
            <p className='services__petal'>Психосоматические проявления</p>
            <p className='services__petal'>Запросы на улучшение состояния</p>
          </div>
        </div>
        <div class='services__request'>
          <div className='get__item-link'>
            <img src={flower_get} alt='' />
            <div>
              <p className='get__text item__title'>Эмоциональные состояния</p>
              {/* <p className='get__subtext item__text'>
                  </p> */}
            </div>
          </div>
          <div className='get__item-link'>
            <img src={flower_get} alt='' />
            <div>
              <p className='get__text item__title'>Физическая боль</p>
              {/* <p className='get__subtext item__text'>
                  </p> */}
            </div>
          </div>
          <div className='get__item-link'>
            <img src={flower_get} alt='' />
            <div>
              <p className='get__text item__title'>Жизненные ситуации</p>
              {/* <p className='get__subtext item__text'>
                  </p> */}
            </div>
          </div>
          <div className='get__item-link'>
            <img src={flower_get} alt='' />
            <div>
              <p className='get__text item__title'>Психосоматические проявления</p>
              {/* <p className='get__subtext item__text'>
                  </p> */}
            </div>
          </div>
          <div className='get__item-link'>
            <img src={flower_get} alt='' />
            <div>
              <p className='get__text item__title'>Запросы на улучшение состояния</p>
              {/* <p className='get__subtext item__text'>
                  </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
