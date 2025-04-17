import React from 'react';
import flower_get from '../../../images/flower-get.png';
import flower_requests from '../../../images/flower-requests.png';
import img1 from '../../../images/StokImg/1.png';
import img2 from '../../../images/StokImg/2.png';
import img4 from '../../../images/StokImg/4.png';

export function Request() {
  return (
    <div class='request'>
      <div className='container'>
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
        <div class='services__img'>
          <img src={img1} alt='' />
          <img src={img2} alt='' />
          <img src={img4} alt='' />
        </div>
      </div>
    </div>
  );
}
