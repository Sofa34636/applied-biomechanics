import React from 'react';
import flower_get from '../../../images/flower-get.svg';

export function Get() {
  return (
    <div className='get'>
      <div className='container-fluid'>
        <div className='get__bloc'>
          <p className='get__title'>Что вы получаете после сеанса?</p>
        </div>
        <div className='container'>
          <div className='get__inner'>
            <div className='get__item'>
              <img src={flower_get} alt='' />
              <div>
                <p className='get__text'>Физическое расслабление</p>
                <p className='get__subtext'>
                  Мышцы расслабляются, уходит напряжение, появляется спокойствие.
                </p>
              </div>
            </div>
            <div className='get__item get__item-link'>
              <img src={flower_get} alt='' />
              <div>
                <p className='get__text'>Снижение боли</p>
                <p className='get__subtext'>
                  Улучшение кровообращения в проблемных зонах уменьшает хронические боли.
                </p>
              </div>
            </div>
            <div className='get__item'>
              <img src={flower_get} alt='' />
              <div>
                <p className='get__text'>Прилив энергии</p>
                <p className='get__subtext'>
                  Устранение блоков позволяет свободно циркулировать энергии, ощущается бодрость.
                </p>
              </div>
            </div>
            <div className='get__item get__item-link'>
              <img src={flower_get} alt='' />
              <div>
                <p className='get__text'>Новый взгляд на себя</p>
                <p className='get__subtext'>
                  Повышается осознание тела и его сигналов, появляется бережное отношение к себе.
                </p>
              </div>
            </div>
            <div className='get__item'>
              <img src={flower_get} alt='' />
              <div>
                <p className='get__text'>Осознание эмоций</p>
                <p className='get__subtext'>
                  Массаж помогает понять скрытые переживания и освободиться от внутренних
                  конфликтов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
