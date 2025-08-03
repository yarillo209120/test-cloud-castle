'use client'

import { useState } from 'react';
import { useBingoCards } from './useBingoCards';
import styles from './BingoSection.module.scss';

export const BingoSection = () => {
  const { cards } = useBingoCards();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (id: number): void => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id) 
        : [...prev, id]
    );
    setHoveredCard(null);
  };

  const handleMouseEnter = (id: number): void => {
    if (!flippedCards.includes(id)) {
      setHoveredCard(id);
    }
  };

  const handleMouseLeave = (): void => {
    setHoveredCard(null);
  };

  const getCardRotation = (id: number): string => {
    if (flippedCards.includes(id)) return '180deg';
    if (hoveredCard === id) return '180deg';
    return '0deg';
  };

  return (
    <section className={styles.bingo} id="bingo">
      <div className={styles.bingo__container}>
        <h2 className={styles.bingo__title}>Открой все карточки <br />и собери свое бинго</h2>
        
        <div className={styles.bingo__grid}>
          {cards.map((card) => (
            <div 
              key={card.id}
              className={styles.bingo__card}
              onClick={() => handleCardClick(card.id)}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
              style={{ '--card-bg-image': `url(${card.bgImage})` } as React.CSSProperties}
            >
              <div 
                className={styles.bingo__cardInner}
                style={{ 
                  transform: `rotateY(${getCardRotation(card.id)})`,
                  transition: flippedCards.includes(card.id) 
                    ? 'transform 0.6s ease' 
                    : 'transform 0.3s ease'
                }}
              >
                <div className={styles.bingo__cardFront}>
                  <p className={styles.bingo__cardText}>{card.title}</p>
                </div>
                <div className={styles.bingo__cardBack}>
                  <p className={styles.bingo__cardDesc}>{card.backContent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};