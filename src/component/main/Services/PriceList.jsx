import React from 'react';
import priceList_img from '../../../images/priceList-img.svg';
import priceList_img2 from '../../../images/priceList-img(2).svg';

export function PriceList() {
  return (
    <div className='priceList'>
      <div className='container'>
        <p className='bloc__title'>Прайс-лист</p>
        <p className='bloc__text'>Расслабление и обновление вашего тела</p>
        <div className='priceList__inner'>
          <div className='priceList__bloc'>
            <div className='priceList__description'>
              <p className=''>Первый прием приоткрывает и освещает путь к решению ваших задач. </p>
              <p className=''>
                С каждым сеансом вам легче дышать, жизнь наполняется яркими красками, общение
                становится искреннее, а новые нейронные связи открывают удивительные возможности.
              </p>
              <p className=''>
                Мы помогаем телу запустить механизмы, которые долгое время оставались в спящем
                режиме, чтобы вы вновь ощутили радость и полноту жизни.
              </p>
            </div>
            <p className='priceList__money'> 5000 ₽</p>
            <p className='priceList__subtext'>количество сеансов для проработки 3-5</p>
            <div className='priceList__button'>
              <button className='priceList__button-green'>Подробнее</button>
              <button className='priceList__button-white'>Купить</button>
            </div>
          </div>
          <div className='priceList__images'>
            <img src={priceList_img} alt='' />
            <img className='priceList__img' src={priceList_img2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
