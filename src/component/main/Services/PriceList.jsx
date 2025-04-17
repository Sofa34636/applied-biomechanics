import React from 'react';
import priceList_img from '../../../images/priceList-img.png';
import priceList_img2 from '../../../images/priceList-img(2).png';
import { Link } from 'react-router-dom';

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
            <div class='priceList__text item__title '>Формат консультаций:</div>
            <div class='priceList__money-item'>
              <p className='priceList__money item__price'>очно 5000 ₽</p>
              <p className='priceList__money item__price'>онлайн 2500 ₽</p>
            </div>
            <div class='priceList__item'>
              <p className='priceList__subtext item__subtext'>
                количество сеансов для проработки 3-5
              </p>
              <div className='priceList__button item__text'>
                {/* <button className='priceList__button-item priceList__button-green'>
                  Подробнее
                </button> */}
                <Link to='https://t.me/Oksi_R19' target='_blank' rel='noopener noreferrer'>
                  <button className='priceList__button-item priceList__button-white'>Купить</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='priceList__images'>
            <img className='priceList__img' src={priceList_img2} alt='' />
            <img className='priceList__img' src={priceList_img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
