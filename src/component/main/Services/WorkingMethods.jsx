import React from 'react';
import { Therapy } from './Therapy';
export function WorkingMethods() {
  return (
    <div className='workingMethods'>
      <div className='container'>
        <p className='bloc__title'>Методы работы</p>
        <p className='bloc__text'>Прикладная биомеханика тела по методу Сергея Биленко</p>
        <p className='bloc__subtext'>
          Биомеханика изучает движение и взаимодействие частей тела. Каждый элемент, от позвоночника
          до мышц, работает в едином механизме, и сбои могут вызывать боль.
        </p>
        <div className='workingMethods__inner'>
          <p className='workingMethods__basic'>ОСНОВНЫЕ</p>
          <div className='workingMethods__pyramid'>
            <div className='workingMethods__posture workingMethods__item'>Осанка</div>
            <div className='workingMethods__mobility workingMethods__item'>Мобильность</div>
            <div className='workingMethods__habits workingMethods__item'>Привычки движений</div>
            <div className='workingMethods__distribution workingMethods__item'>Распределение</div>
          </div>
          <p className='workingMethods__aspects'>АСПЕКТЫ</p>
        </div>
      </div>
      <Therapy />
    </div>
  );
}
