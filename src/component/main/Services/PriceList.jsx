import React from 'react';
import priceList_img from '../../../images/priceList-img.svg';
import priceList_img2 from '../../../images/priceList-img(2).svg';

export function PriceList() {
  return (
    <div className='priceList'>
      <div className='container'>
        <p className='top__text'>Прайс-лист</p>
        <p className='bloc__text'>Расслабление и обновление вашего тела</p>
        <div className='priceList__inner '>
          <div className='priceList__bloc'>
            <div className='priceList__description item__text'>
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
            <p className='priceList__subtext item__subtext'>
              количество сеансов для проработки 3-5
            </p>
            <div class='priceList__item'>
              <p className='priceList__money item__price'> 5000 ₽</p>
              <div className='priceList__button item__text'>
                <button className='priceList__button-item priceList__button-green'>
                  Подробнее
                </button>
                <button className='priceList__button-item priceList__button-white'>Купить</button>
              </div>
            </div>
          </div>
          <div className='priceList__images'>
            <img className='priceList__img' src={priceList_img} alt='' />
            <img className='priceList__img' src={priceList_img2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
