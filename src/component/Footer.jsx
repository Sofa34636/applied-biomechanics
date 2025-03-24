import React from 'react';
import telegram from '../images/telegram.svg';
import whatsapp from '../images/whatsapp.svg';

export function Footer() {
  return (
    <footer className='footer' id='contacts'>
      <div class='container-fluid'>
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
                hello@massage.com
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
