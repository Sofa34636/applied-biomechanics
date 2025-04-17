import React, { useState } from 'react';

import styles from '../scss/styles/Header.module.scss';
import logo from '../images/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import telegram from '../images/telegram_2.png';
import whatsapp from '../images/whatsapp_2.png';
import { Link } from 'react-router-dom';

// trsc

export function Header() {
  const [nav, setNav] = useState(false);
  const closeMenu = () => {
    setNav(false);
    window.scrollTo(0, 0);
  };
  return (
    <header className={styles.header}>
      <div className='container bloc__title'>
        <div className={styles.header__menu_bloc}>
          <div
            className={
              nav ? [styles.header__inner, styles.header__active].join(' ') : styles.header__inner
            }
          >
            <Link to='/' onClick={closeMenu}>
              <img className={styles.header__img} src={logo} alt='' />
            </Link>
            <ul className={styles.menu}>
              <li className={styles.menu__item}>
                <Link to='/Services' className={styles.menu__link} onClick={closeMenu}>
                  Услуги
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link to='/AdditionalServices' className={styles.menu__link} onClick={closeMenu}>
                  Товары
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link to='/HandmadeProducts' className={styles.menu__link} onClick={closeMenu}>
                  Ручные изделия
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link to='/Gallery' className={styles.menu__link} onClick={closeMenu}>
                  Галерея
                </Link>
              </li>
              <li className={styles.menu__item}>
                <a href='#contacts' className={styles.menu__link} onClick={closeMenu}>
                  Контакты
                </a>
              </li>
            </ul>
            <Link
              to='https://t.me/Oksi_R19'
              target='_blank'
              rel='noopener noreferrer'
              onClick={closeMenu}
            >
              <button className='priceList__button-item priceList__button-white'>Записаться</button>
            </Link>
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
