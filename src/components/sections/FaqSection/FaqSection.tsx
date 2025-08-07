'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './FaqSection.module.scss';

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Что такое соврмененный поиск?",
      answer: "Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности"
    },
    {
      question: "Что такое соврмененный поиск?",
      answer: "Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности"
    },
    {
      question: "Что такое соврмененный поиск?",
      answer: "Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности"
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <section className={styles.faq} id="faqs">
      <div className={styles.faq__container}>
        <h2 className={styles.faq__title}>Еще вопросы?</h2>
        
        <div className={styles.faq__accordion}>
          {faqs.map((item, index) => (
            <div 
              key={index}
              className={`${styles.faq__item} ${activeIndex === index ? styles['faq__item--active'] : ''}`}
            >
              <button 
                className={styles.faq__question}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <div className={styles.faq__icon}>
                  <Image
                    src="images/accordion-arrow.png"
                    alt={activeIndex === index ? "Закрыть" : "Открыть"}
                    width={24}
                    height={25}
                  />
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={styles.faq__answer}
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0',
                  opacity: activeIndex === index ? '1' : '0'
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};