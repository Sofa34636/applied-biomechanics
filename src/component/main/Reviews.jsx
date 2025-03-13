import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Правильный именованный импорт
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import reviews_img from '../../images/reviews-img.svg';
import star from '../../images/star.svg';

export function Reviews() {
  return (
    <div className='reviews'>
      <p className='bloc__title'>Мероприятия</p>
      <div class='container'>
        <div class='reviews__inner'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={3}
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
                slidesPerView: 3,
              },
              10: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div class='reviews__bloc'>
                <img class='reviews__img' src={reviews_img} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__bloc'>
                <img class='reviews__img' src={reviews_img} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__bloc'>
                <img class='reviews__img' src={reviews_img} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__bloc'>
                <img class='reviews__img' src={reviews_img} alt='' />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={2}
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
                slidesPerView: 2,
              },
              10: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title'>Имя</p>
                  <img class='reviews__img' src={star} alt='' />
                </div>
                <p class='discount__text'>
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий{' '}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title'>Имя</p>
                  <img class='reviews__img' src={star} alt='' />
                </div>
                <p class='discount__text'>
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий{' '}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title'>Имя</p>
                  <img class='reviews__img' src={star} alt='' />
                </div>
                <p class='discount__text'>
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий{' '}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title'>Имя</p>
                  <img class='reviews__img' src={star} alt='' />
                </div>
                <p class='discount__text'>
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий
                  Комменарий Комменарий Комменарий Комменарий Комменарий Комменарий{' '}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
