import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Правильный именованный импорт
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import discount_img from '../../images/discount-img.svg';

export function Discount() {
  return (
    <div className='discount'>
      <p className='bloc__title'>Скидки и Акции</p>
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
            <div class='discount__bloc discount__bloc-white'>
              <div class='discount__item'>
                <p class='discount__title'>С другом дешевле</p>
                <p class='discount__text'>
                  Пригласите друга и получите 10% скидку на следующее посещение.
                </p>
                <p class='discount__subtext'>*Подробности уточняйте у администратора </p>
              </div>
              <img src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-white'>
              <div class='discount__item'>
                <p class='discount__title'>абонемент</p>
                <p class='discount__text'>
                  При покупке 5 посещений — 15% скидка на общую стоимость.
                </p>
                <p class='discount__subtext'>*Подробности уточняйте у администратора </p>
              </div>
              <img src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-white'>
              <div class='discount__item'>
                <p class='discount__title'>Ваш день — наши скидки!</p>
                <p class='discount__text'>
                  В день рождения — 1000 рублей скидки на любое посещение. Покажите удостоверение
                  личности.
                </p>
                <p class='discount__subtext'>*Подробности уточняйте у администратора </p>
              </div>
              <img src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-white'>
              <div class='discount__item'>
                <p class='discount__title'>Сертификат</p>

                <p class='discount__text'>*Подробности уточняйте у администратора </p>
              </div>
              <img src={discount_img} alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
