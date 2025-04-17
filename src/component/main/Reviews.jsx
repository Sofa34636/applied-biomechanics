import React from 'react';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react'; // Правильный именованный импорт
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import reviews_img from '../../images/reviews-img.png';
import star from '../../images/star.png';
import Video1 from '../../images/ReviewVideo/1.mp4';
import Video2 from '../../images/ReviewVideo/2.mp4';
import Video3 from '../../images/ReviewVideo/3.mp4';
import Video4 from '../../images/ReviewVideo/4.mp4';
import Video5 from '../../images/ReviewVideo/5.mp4';
import Video6 from '../../images/ReviewVideo/6.mp4';
import Video7 from '../../images/ReviewVideo/7.mp4';
import Video8 from '../../images/ReviewVideo/8.mp4';
import Video9 from '../../images/ReviewVideo/9.mp4';
import Video10 from '../../images/ReviewVideo/10.mp4';
import Video11 from '../../images/ReviewVideo/11.mp4';
import Thumb1 from '../../images/ReviewImg/1.png';
import Thumb2 from '../../images/ReviewImg/2.png';
import Thumb3 from '../../images/ReviewImg/3.png';
import Thumb4 from '../../images/ReviewImg/4.png';
import Thumb5 from '../../images/ReviewImg/5.png';
import Thumb6 from '../../images/ReviewImg/6.png';
import Thumb7 from '../../images/ReviewImg/7.png';
import Thumb8 from '../../images/ReviewImg/8.png';
import Thumb9 from '../../images/ReviewImg/9.png';
import Thumb10 from '../../images/ReviewImg/10.png';
import Thumb11 from '../../images/ReviewImg/11.png';

const video = [
  Video3,
  Video2,
  Video4,
  Video5,
  Video6,
  Video7,
  Video8,
  Video9,
  Video10,
  Video11,
  Video1,
];
const thumbnails = [
  Thumb3,
  Thumb2,
  Thumb4,
  Thumb5,
  Thumb6,
  Thumb7,
  Thumb8,
  Thumb9,
  Thumb10,
  Thumb11,
  Thumb1,
];

export function Reviews() {
  return (
    <div className='reviews'>
      <p className='top__text'>Отзывы и истории</p>
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
              700: {
                slidesPerView: 3,
              },
              10: {
                slidesPerView: 1,
              },
            }}
          >
            {video.map((video, index) => (
              <SwiperSlide key={index}>
                <div className='reviews__bloc'>
                  <ReactPlayer
                    url={video}
                    className='reviews__img'
                    width='100%'
                    height='100%'
                    controls={true}
                    light={thumbnails[index]}
                    playing={false}
                  />
                </div>
              </SwiperSlide>
            ))}{' '}
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
                  <p class='discount__title item__title'>Имя</p>
                  <img class='' src={star} alt='' />
                </div>
                <p class='discount__text item__text'>
                  Девочки, встреча с Оксаной — это волшебство! Была на огнетерапии — просто космос:
                  вибрации в теле, внутренние процессы. Даже её случайная музыка открыла мне многое.
                  После сеанса всё закрутилось-завертелось. Оксана, благодарю за встречу! Жаль, что
                  я далеко, иначе бежала бы к тебе вприпрыжку. Ты и твои руки творят чудеса!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title item__title'>Имя</p>
                  <img class='' src={star} alt='' />
                </div>
                <p class='discount__text item__text'>
                  Оксаник, после огнетерапии — космос! Два дня была как разбитое стекло, а теперь
                  будто заново родилась. Лёгкость, мозги на месте. Это тот случай, когда надо жечь!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title item__title'>Имя</p>
                  <img class='' src={star} alt='' />
                </div>
                <p class='discount__text item__text'>
                  Хотела отвлечься от контролирующих мыслей и расслабиться, но не уснуть. Оксана
                  оправдала ожидания: массаж медленный, глубокий, ощущения в теле яркие. Любопытство
                  не дало заснуть. После — звуковая релаксация. Ищу своего мастера — это она!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title item__title'>Имя</p>
                  <img class='' src={star} alt='' />
                </div>
                <p class='discount__text item__text'>
                  Неделю наблюдала: ушла опустошённость. Усталость после работы теперь физическая,
                  не ментальная. Поняла про "крыс, бегущих с корабля" — всё интересно проигралось.
                  Наткнулась на калейдоскоп, который видела. Это не про "вау", а про глубину
                  понимания через тело.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title item__title'>Имя</p>
                  <img class='' src={star} alt='' />
                </div>
                <p class='discount__text item__text'>
                  Будто набираю мощь. В голове фраза "таков путь". На стресс реагирую спокойнее. В
                  среду плакала на работе от увиденного, начальник сказал: "Хочешь — поплачь", и
                  стало легко. Интересно! Постараюсь ещё попасть к вам, как разгружусь.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title item__title'>Имя</p>
                  <img class='' src={star} alt='' />
                </div>
                <p class='discount__text item__text'>
                  Наблюдать за изменениями — одно наслаждение. Оксана, ты волшебница! Почувствовала
                  женственность, прилив сил. С дочкой провела время с удовольствием, без прежнего
                  отстранения. Любовь к ребёнку потекла потоком. Приду на следующей неделе!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='reviews__item'>
                <div class='reviews__link'>
                  <p class='discount__title item__title'>Имя</p>
                  <img class='' src={star} alt='' />
                </div>
                <p class='discount__text item__text'>
                  Летом порекомендовала подруга. Оксана — невероятный человек с сильной энергетикой.
                  Легко вводит в транс, помогает разобраться в себе и направляет. Сеанс длился 3
                  часа, но время пролетело незаметно. Получила удовольствие от общения и инсайтов.
                  Рекомендую всем! Лучшее знакомство — личная встреча.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
