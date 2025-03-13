import React from 'react';
import img1 from '../../images/Gallery/1.svg';
import img2 from '../../images/Gallery/2.svg';
import img3 from '../../images/Gallery/3.svg';
import img4 from '../../images/Gallery/4.svg';
import img5 from '../../images/Gallery/5.svg';
import img6 from '../../images/Gallery/6.svg';
import img7 from '../../images/Gallery/7.svg';

export function Gallery() {
  return (
    <div className='gallery'>
      <p className='bloc__title'>Фото сеансов</p>
      <div class='container'>
        <div class='gallery__inner'>
          <img class='gallery__img' src={img1} alt='' />
          <img class='gallery__img' src={img2} alt='' />
          <img class='gallery__img' src={img3} alt='' />

          <img class='gallery__img' src={img4} alt='' />

          <img class='gallery__img' src={img5} alt='' />
          <img class='gallery__img' src={img6} alt='' />

          <img class='gallery__img' src={img7} alt='' />
        </div>
      </div>
    </div>
  );
}
