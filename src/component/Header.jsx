import React, { useState } from 'react';

import styles from '../scss/styles/Header.module.scss';
import logo from '../images/logo.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import telegram from '../images/telegram_2.svg';
import whatsapp from '../images/whatsapp_2.svg';
import { Link } from 'react-router-dom';

// trsc

export function Header() {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.header}>
      <div className='container bloc__title'>
        <div className={styles.header__menu_bloc}>
          <div
            className={
              nav ? [styles.header__inner, styles.header__active].join(' ') : styles.header__inner
            }
          >
            <Link to='/'>
              <img className={styles.header__img} src={logo} alt='' />
            </Link>
            <ul className={styles.menu}>
              <li className={styles.menu__item}>
                <Link to='/Services' className={styles.menu__link}>
                  Услуги
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link to='/AdditionalServices' className={styles.menu__link}>
                  Товары
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link to='/Gallery' className={styles.menu__link}>
                  Галерея
                </Link>
              </li>
              <li className={styles.menu__item}>
                <a href='#contacts' className={styles.menu__link}>
                  Контакты
                </a>
              </li>
            </ul>
            <a href='https://t.me/Oksi_R19' target='_blank' rel='noopener noreferrer'>
              <button className='priceList__button-item priceList__button-white'>
                Записаиться
              </button>
            </a>
            <div class={styles.header__contact}>
              <div class='footer__menu '>
                <img src={telegram} alt='' />
                <img src={whatsapp} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu__btn} onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
    </header>
  );
}
