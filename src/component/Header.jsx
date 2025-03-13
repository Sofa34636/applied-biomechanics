import React from 'react';

import styles from '../scss/styles/Header.module.scss';
import logo from '../images/logo.svg';

// trsc

export function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__inner}>
          <img className={styles.header__img} src={logo} alt='' />
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <a href='#' className={styles.menu__link}>
                Обо мне
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href='#' className={styles.menu__link}>
                Услуги
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href='#' className={styles.menu__link}>
                Отзывы и истории
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href='#' className={styles.menu__link}>
                Контакты
              </a>
            </li>
          </ul>
          <div className={styles.menu__number}>+7 (000) 000 00 00</div>
        </div>
      </div>
    </header>
  );
}
