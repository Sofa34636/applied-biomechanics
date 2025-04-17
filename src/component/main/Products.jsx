import React, { useState } from 'react';
import product1 from '../../images/Products/1.png';
import product2 from '../../images/Products/2.png';
import product3 from '../../images/Products/3.png';
import product4 from '../../images/Products/4.png';
import bracelet1 from '../../images/Bracelet/1.png';
import bracelet2 from '../../images/Bracelet/2.png';
import bracelet3 from '../../images/Bracelet/3.png';
import { Link } from 'react-router-dom';

const product = [
  {
    image: product1,

    title: 'Свеча шамана',
    text: 'Символ связи с духами, очищения и путешествия между мирами. Её пламя воплощает духовный свет, ведущий шамана через сны и видения. Зажигается для ритуалов исцеления, защиты или общения с предками, усиливая интуицию и энергию природы.',
  },
  {
    image: product2,

    title: 'Свеча ворона',
    text: 'Символ мудрости, магии и трансформации. Она усиливает интуицию, защищает от негатива, помогает связаться с предками и направляет к переменам. Зажги её для ясности, очищения или нового начала.',
  },
  {
    image: product3,
    title: 'Ведьмин горшок',
    text: 'Она объединяет энергию огня и трав, усиливая ритуалы. Горшок, как котёл, воплощает трансформацию и созидание, а пламя свечи направляет волю ведьмы, сжигая негатив или призывая желаемое. Это инструмент для защиты, исцеления или работы с энергиями, зажигаемый с чётким запросом для активации природной магии.',
  },
  {
    image: product4,
    title: 'Богиня Гея',
    text: 'Магический символ Великой Матери Земли, воплощающий плодородие, изобилие, гармонию, женственность и опору. Её пламя пробуждает связь с природой, усиливает созидательную энергию, привлекает процветание и удачу. Зажигается для роста проектов, укрепления внутренней силы, исцеления женской энергии и обретения устойчивости. Это ритуальный инструмент для тех, кто ищет изобилие и гармонию в жизни.',
  },
];

const paragraphStyles = {
  WebkitLineClamp: 3, // WebkitLineClamp не является стандартным свойством CSS, но мы можем это указать
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};

export function Products() {
  // Состояние для каждой карточки (true/false для каждой)
  const [isOpen, setIsOpen] = useState(Array(product.length).fill(false));

  // Функция для переключения состояния конкретной карточки
  const toggleText = (index) => {
    setIsOpen(
      (prev) => prev.map((item, i) => (i === index ? !item : item)), // Меняем только для нужного индекса
    );
  };

  return (
    <section>
      <div className='container'>
        <div className='products_candles'>
          <p className='top__text'>Ручные изделия</p>
          <p className='bloc__text'>Свечи под запрос</p>
          <div class='products_candles__inner'>
            {product.map((product, id) => (
              <div class='products_candles__bloc'>
                <div class='' key={id}>
                  <img src={product.image} alt='' class='products_candles__img' />
                  <div class='products_candles__title item__title'>{product.title}</div>
                  <div
                    class='products_candles__text item__text '
                    style={isOpen[id] ? {} : paragraphStyles}
                  >
                    {product.text}
                  </div>
                </div>
                <div class='products_candles__item'>
                  <button
                    class='bloc__title black__text products_candles__button products_candles__button_white'
                    onClick={() => toggleText(id)}
                  >
                    {isOpen[id] ? 'Свернуть' : 'Подробнее '}
                  </button>
                  <Link to='https://t.me/Oksi_R19' target='_blank' rel='noopener noreferrer'>
                    <button class='bloc__title black__text products_candles__button products_candles__button_green'>
                      Купить
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class='products_bracelet'>
          <p className='bloc__text'>Браслеты на раскрытие себя</p>

          <div class='products_bracelet__inner'>
            <div class='products_bracelet__item'>
              <div class='products_bracelet__text item__title black__text'>
                Браслеты с энергетикой природы – создадим талисман именно для вас!
              </div>
              <div class=' item__text black__text'>
                Представляем уникальные браслеты из натуральных камней, созданные вручную специально
                для вас! Мы подбираем камни с учетом ваших пожеланий, энергетики и индивидуальных
                потребностей. Хотите усилить интуицию, привлечь любовь, укрепить здоровье или
                защитить себя от негатива? Мы поможем найти именно ваш камень!{' '}
              </div>
              <div class='products_bracelet__money item__price black__text'>от 1000 ₽</div>
            </div>
            <div class='products_bracelet__img'>
              <img src={bracelet1} alt='' class='' />
              <img src={bracelet2} alt='' class='' />
              <img src={bracelet3} alt='' class='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
