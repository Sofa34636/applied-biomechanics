import React from 'react';
import flower_getWhite from '../../../images/flower_getWhite.svg';

export function GetWhite() {
  return (
    <div>
      <div className='container-fluid '>
        <div className='get__bloc'>
          <p className='get__title top__get'>Что вы получаете после сеанса?</p>
        </div>
        <div className='container white__bloc'>
          <div className='get__inner get__inner-white'>
            <div class='get__item'>
              <div className='get__item-link'>
                <img src={flower_getWhite} alt='' />
                <div>
                  <p className='get__text item__title black__text'>Физическое расслабление</p>
                  <p className='get__subtext item__text black__text'>
                    Мышцы расслабляются, уходит напряжение, появляется спокойствие.
                  </p>
                </div>
              </div>

              <div className='get__item-link'>
                <img src={flower_getWhite} alt='' />
                <div>
                  <p className='get__text item__title black__text'>Прилив энергии</p>
                  <p className='get__subtext item__text black__text'>
                    Устранение блоков позволяет свободно циркулировать энергии, ощущается бодрость.
                  </p>
                </div>
              </div>

              <div className='get__item-link'>
                <img src={flower_getWhite} alt='' />
                <div>
                  <p className='get__text item__title black__text'>Осознание эмоций</p>
                  <p className='get__subtext item__text black__text'>
                    Массаж помогает понять скрытые переживания и освободиться от внутренних
                    конфликтов.
                  </p>
                </div>
              </div>
            </div>
            <div class='get__item'>
              <div className='get__item-link '>
                <img src={flower_getWhite} alt='' />
                <div>
                  <p className='get__text item__title black__text'>Снижение боли</p>
                  <p className='get__subtext item__text black__text'>
                    Улучшение кровообращения в проблемных зонах уменьшает хронические боли.
                  </p>
                </div>
              </div>
              <div className='get__item-link '>
                <img src={flower_getWhite} alt='' />
                <div>
                  <p className='get__text item__title black__text'>Новый взгляд на себя</p>
                  <p className='get__subtext item__text black__text'>
                    Повышается осознание тела и его сигналов, появляется бережное отношение к себе.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
