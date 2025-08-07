'use client'

import Image from "next/image";
import { useRouteContent } from "./useRouteContent";
import styles from './RouteSection.module.scss';
import { useState } from 'react';

export const RouteSection = () => {
  const { activeTab, setActiveTab, currentContent, tabs } = useRouteContent();
  const [transitionStage, setTransitionStage] = useState<'in' | 'out'>('in');

  const handleTabClick = (tabId: number) => {
    if (tabId === activeTab) return;
    
    setTransitionStage('out');
    setTimeout(() => {
      setActiveTab(tabId);
      setTransitionStage('in');
    }, 300);
  };

  return (
    <section className={styles.route} id="route">
      <div className={styles.route__container}>
        <div className={styles.route__header}>
          <h2 className={styles.route__title}>В первый день вас ждет <br />интересный маршрут</h2>
          <p className={styles.route__intro}>Международный аэропорт Екатеринбурга обслуживает как сам <br />Екатеринбург,
            так прилежащие к нему районы Свердловской области.</p>
        </div>

        <div className={styles.route__imageCards}>
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              className={`${styles.route__imageCard} ${
                activeTab === tab.id ? styles['route__imageCard--active'] : ''
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <Image
                src={`images/route-img-${tab.id}.webp`}
                alt={tab.title}
                width={300}
                height={200}
                className={styles.route__image}
              />
              <p className={styles.route__imageCaption}>{tab.title}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.route__subjects} ${
          transitionStage === 'out' ? styles['route__subjects--fadeOut'] : styles['route__subjects--fadeIn']
        }`}>
          {currentContent.subjects.map((subject) => (
            <div key={subject.id} className={styles.route__subject}>
              <h3 className={styles.route__subjectTitle}>{subject.title}</h3>
              <p className={styles.route__subjectDesc}>{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};