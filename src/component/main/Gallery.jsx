import React from 'react';
import img1 from '../../images/Gallery/1.png';
import img2 from '../../images/Gallery/2.png';
import img3 from '../../images/Gallery/3.png';
import img4 from '../../images/Gallery/4.png';
import img5 from '../../images/Gallery/5.png';
import img6 from '../../images/Gallery/6.png';
import img7 from '../../images/Gallery/7.png';

export function Gallery() {
  return (
    <div className='gallery'>
      <p className='top__text'>Фото сеансов</p>
      <div class='container'>
        <div class='gallery__inner'>
          <div class='gallery__grid'>
            <div class='gallery__flex'>
              <div class='gallery__img-1'>
                <img class='gallery__img' src={img1} alt='' />
              </div>
              <div class='gallery__img-2'>
                <img class='gallery__img' src={img2} alt='' />
              </div>
              <div class='gallery__img-3'>
                <img class='gallery__img' src={img3} alt='' />
              </div>{' '}
            </div>{' '}
            <div class='gallery__img gallery__img-4'>
              {' '}
              <img class='gallery__img gallery__img_4' src={img4} alt='' />
            </div>
            <div class='gallery__img-5'>
              <img class='gallery__img' src={img5} alt='' />
            </div>
            <div class='gallery__img-6'>
              <img class='gallery__img' src={img6} alt='' />
            </div>
            <div class='gallery__img-7'>
              <img class='gallery__img' src={img7} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class='gallery__bloc'>
<img class='gallery__img' src={img4} alt='' />
<div class='gallery____bloc-column'>
  <div class='gallery__bloc'>
    <img class='gallery__img' src={img5} alt='' />
    <img class='gallery__img' src={img6} alt='' />
  </div>
  <img class='gallery__img' src={img7} alt='' />
</div>
</div> */
}
