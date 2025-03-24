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
    <div className='discount white__box'>
      <p className='top__text black__text'>Скидки и Акции</p>
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
              <div class='discount__item '>
                <p class='discount__title item__title white__text'>С другом дешевле</p>
                <p class='discount__text item__text white__text'>
                  Пригласите друга и получите 10% скидку на следующее посещение.
                </p>
                <p class='discount__subtext item__subtext white__text'>
                  *Подробности уточняйте у администратора
                </p>
              </div>
              <img class='discount__img' src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-green'>
              <div class='discount__item white__text'>
                <p class='discount__title item__title white__text'>абонемент</p>
                <p class='discount__text item__text white__text'>
                  При покупке 5 посещений — 15% скидка на общую стоимость.
                </p>
                <p class='discount__subtext item__subtext white__text'>
                  *Подробности уточняйте у администратора{' '}
                </p>
              </div>
              <img class='discount__img' src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-green'>
              <div class='discount__item white__text'>
                <p class='discount__title item__title white__text'>Ваш день — наши скидки!</p>
                <p class='discount__text item__text white__text'>
                  В день рождения — 1000 рублей скидки на любое посещение. Покажите удостоверение
                  личности.
                </p>
                <p class='discount__subtext item__subtext white__text'>
                  *Подробности уточняйте у администратора{' '}
                </p>
              </div>
              <img class='discount__img' src={discount_img} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class='discount__bloc discount__bloc-green'>
              <div class='discount__item white__text'>
                <p class='discount__title item__title white__text'>Сертификат</p>

                <p class='discount__text item__text white__text'>
                  *Подробности уточняйте у администратора{' '}
                </p>
              </div>
              <img class='discount__img' src={discount_img} alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
