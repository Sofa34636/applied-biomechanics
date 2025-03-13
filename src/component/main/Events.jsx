import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Правильный именованный импорт
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import discount_img from '../../images/discount-img.svg';

export function Events() {
  return (
    <div className='discount'>
      <p className='bloc__title'>Мероприятия</p>
      <div class='discount__inner'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          grabCursor={true} // Добавляем визуальный курсор для перетаскивания
          centeredSlides={true}
          slidesPerGroup={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          // speed={1000}
          breakpoints={{
            1050: {
              slidesPerView: 1,
            },
            10: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-green'>
              <div class='discount__item'>
                <p class='discount__title'>Мероприятие 2</p>
                <p class='discount__text'>
                  Описание мероприятия Описание мероприятия Описание мероприятия Описание
                  мероприятия Описание мероприятия Описание мероприятия
                </p>
                <div class='discount__link'>
                  <p class='discount__time'>00.00.00</p>
                  <p class='discount__time'>00:00:00 </p>
                </div>
              </div>
              <img class='discount__img' src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-green '>
              <div class='discount__item'>
                <p class='discount__title'>Мероприятие 2</p>
                <p class='discount__text'>
                  Описание мероприятия Описание мероприятия Описание мероприятия Описание
                  мероприятия Описание мероприятия Описание мероприятия
                </p>
                <div class='discount__link'>
                  <p class='discount__time'>00.00.00</p>
                  <p class='discount__time'>00:00:00 </p>
                </div>
              </div>
              <img src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-green'>
              <div class='discount__item'>
                <p class='discount__title'>Мероприятие 2</p>
                <p class='discount__text'>
                  Описание мероприятия Описание мероприятия Описание мероприятия Описание
                  мероприятия Описание мероприятия Описание мероприятия
                </p>
                <div class='discount__link'>
                  <p class='discount__time'>00.00.00</p>
                  <p class='discount__time'>00:00:00 </p>
                </div>
              </div>
              <img src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-green'>
              <div class='discount__item'>
                <p class='discount__title'>Мероприятие 2</p>
                <p class='discount__text'>
                  Описание мероприятия Описание мероприятия Описание мероприятия Описание
                  мероприятия Описание мероприятия Описание мероприятия
                </p>
                <div class='discount__link'>
                  <p class='discount__time'>00.00.00</p>
                  <p class='discount__time'>00:00:00 </p>
                </div>
              </div>
              <img src={discount_img} alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
