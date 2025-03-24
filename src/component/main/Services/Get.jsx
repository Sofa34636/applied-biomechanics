import React from 'react';
import flower_get from '../../../images/flower-get.svg';

export function Get() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='get__bloc'>
          <p className='get__title top__get'>Что вы получаете после сеанса?</p>
        </div>
      </div>
      <div className='get'>
        <div className='container'>
          <div className='get__inner '>
            <div class='get__item'>
              <div className='get__item-link'>
                <img src={flower_get} alt='' />
                <div>
                  <p className='get__text item__title'>Физическое расслабление</p>
                  <p className='get__subtext item__text'>
                    Мышцы расслабляются, уходит напряжение, появляется спокойствие.
                  </p>
                </div>
              </div>

              <div className='get__item-link'>
                <img src={flower_get} alt='' />
                <div>
                  <p className='get__text item__title'>Прилив энергии</p>
                  <p className='get__subtext item__text'>
                    Устранение блоков позволяет свободно циркулировать энергии, ощущается бодрость.
                  </p>
                </div>
              </div>

              <div className='get__item-link'>
                <img src={flower_get} alt='' />
                <div>
                  <p className='get__text item__title'>Осознание эмоций</p>
                  <p className='get__subtext item__text'>
                    Массаж помогает понять скрытые переживания и освободиться от внутренних
                    конфликтов.
                  </p>
                </div>
              </div>
            </div>
            <div class='get__item'>
              <div className='get__item-link '>
                <img src={flower_get} alt='' />
                <div>
                  <p className='get__text item__title'>Снижение боли</p>
                  <p className='get__subtext item__text'>
                    Улучшение кровообращения в проблемных зонах уменьшает хронические боли.
                  </p>
                </div>
              </div>
              <div className='get__item-link '>
                <img src={flower_get} alt='' />
                <div>
                  <p className='get__text item__title'>Новый взгляд на себя</p>
                  <p className='get__subtext item__text'>
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
