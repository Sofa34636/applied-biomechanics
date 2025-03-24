import React, { useState, useEffect, useRef } from 'react';
import training_img1 from '../../images/Training/1.svg';
import training_img2 from '../../images/Training/2.svg';
import training_img3 from '../../images/Training/3.svg';
import training_img4 from '../../images/Training/4.svg';

// Массив карточек с их данными
const cards = [
  {
    title: 'огненный массаж',
    image: training_img1,
    description:
      'техника с использованием безопасного огня для разогрева мышц, улучшения кровообращения и снятия стресса. Дарит расслабление, лёгкость и улучшает сон. Подходит для любителей необычного, но требует профессионализма.',
    description2:
      'техника, сочетающая тепло огня и массажные движения. Пламя, создаваемое с помощью безопасных инструментов, мягко разогревает мышцы, улучшает кровообращение и снимает стресс. Процедура дарит глубокое расслабление, улучшает сон и оставляет ощущение лёгкости, превращая массаж в завораживающий ритуал. Подходит для любителей необычного релакса, но требует осторожности и профессионального подхода.',
  },
  {
    title: 'нейрорелаксация маслом',
    image: training_img2,
    description:
      '  массаж с тёплыми маслами для расслабления нервной системы. Снимает стресс, улучшает кровообращение и сон, даря лёгкость и гармонию. Подходит для восстановления.',
    description2:
      'массаж, направленный на глубокое расслабление нервной системы с помощью тёплых масел. Мягкие, плавные движения снимают напряжение, улучшают кровообращение и успокаивают разум. Техника помогает справиться со стрессом, бессонницей и усталостью, даря телу лёгкость, а душе — гармонию. Идеально для тех, кто ищет спокойствие и восстановление.',
  },
  {
    title: 'нейрорелаксация маслом',
    image: training_img3,
    description:
      '  массаж с тёплыми маслами для расслабления нервной системы. Снимает стресс, улучшает кровообращение и сон, даря лёгкость и гармонию. Подходит для восстановления.',
    description2:
      'массаж, направленный на глубокое расслабление нервной системы с помощью тёплых масел. Мягкие, плавные движения снимают напряжение, улучшают кровообращение и успокаивают разум. Техника помогает справиться со стрессом, бессонницей и усталостью, даря телу лёгкость, а душе — гармонию. Идеально для тех, кто ищет спокойствие и восстановление.',
  },
  {
    title: 'криольский массаж',
    image: training_img4,
    description:
      'Криольский массаж с Маврикия: бамбуковые палочки, ритмы "сега", 120 ударов в минуту. С маслами улучшает кровообращение, лимфу, борется с целлюлитом, снимает стресс. Противопоказан при онкологии. Тропический ритуал.',
    description2:
      'техника с Маврикия, где бамбуковыми палочками под ритмы музыки "сега" выполняют до 120 ударов в минуту. С маслами авокадо или миндаля массаж стимулирует кровообращение, лимфу, борется с целлюлитом, тонизирует мышцы, снимает стресс. Противопоказан при онкологии и кожных болезнях. Это ритуал с тропическим настроением.',
  },
];

export function Training() {
  // Состояние для каждой карточки
  const [flippedStates, setFlippedStates] = useState(cards.map(() => false));
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const cardRefs = useRef(cards.map(() => React.createRef())); // Создаём массив ref

  // Обновляем isMobile при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Настраиваем IntersectionObserver для каждой карточки
  useEffect(() => {
    if (!isMobile) {
      // Если не мобильное устройство, сбрасываем перевороты
      setFlippedStates(cards.map(() => false));
      return;
    }

    const observers = cards.map((_, index) => {
      return new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setFlippedStates((prev) =>
            prev.map((state, i) => (i === index ? entry.isIntersecting : state)),
          );
        },
        {
          root: null,
          threshold: 0.5, // Переворот срабатывает, когда 50% карточки видно
        },
      );
    });

    // Привязываем наблюдателей к каждой карточке
    cardRefs.current.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    // Очищаем наблюдателей при размонтировании
    return () => {
      cardRefs.current.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, [isMobile, cards]);

  return (
    <div className='training white__box'>
      <div className='container'>
        <p className='top__text black__text'>Обучение</p>
        <div className='training__inner item__text'>
          {cards.map((card, index) => (
            <div className='training__bloc' key={index}>
              <p className='training__text'>{card.title}</p>
              <div className='training__flip-container' ref={cardRefs.current[index]}>
                <div className={`training__flip ${flippedStates[index] ? 'flipped' : ''}`}>
                  <div className='training__front'>
                    <img className='training__img' src={card.image} alt={card.title} />
                  </div>
                  <div className='training__description training__back black__text'>
                    {card.description}
                  </div>
                  <div className=' training__description2 training__back black__text'>
                    {card.description2}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
