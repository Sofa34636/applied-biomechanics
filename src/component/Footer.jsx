import React from 'react';
import telegram from '../images/telegram.png';
import whatsapp from '../images/whatsapp.png';

export function Footer() {
  return (
    <footer className='footer' id='contacts'>
      <div class='container-fluid'>
        <div class='footer__container'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.366145064698!2d131.89081747566297!3d43.11783397113257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39209eb7df29f%3A0x2e0c773043f03151!2z0YPQuy4g0KHRg9GF0LDQvdC-0LLQsCwgM9CxLCDQktC70LDQtNC40LLQvtGB0YLQvtC6LCDQn9GA0LjQvNC-0YDRgdC60LjQuSDQutGA0LDQuSwgNjkwMDkx!5e0!3m2!1sru!2sru!4v1743731392089!5m2!1sru!2sru'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        <div class='footer__inner'>
          <p class='footer__title item__footer-title'>Позвоните, чтобы записиаться на сеанс</p>
          <ul class='footer__social item__footer-text'>
            <li class='footer__social-item'>
              <a href='#' class='footer__social-link'>
                +7 994 005 5558
              </a>
            </li>

            <li class='footer__social-item'>
              <a href='#' class='footer__social-link'>
                г. Владивосток, ул. Суханова 3б
              </a>
            </li>
          </ul>
          <div class='footer__menu'>
            <a
              href='https://wa.me/79940055558' // Замените на ваш номер WhatsApp
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={whatsapp} alt='WhatsApp' />
            </a>
            <a href='https://t.me/Oks_Rada' target='_blank' rel='noopener noreferrer'>
              <img src={telegram} alt='Telegram' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
