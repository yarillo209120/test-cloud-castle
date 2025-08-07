'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Logo } from '@/components/ui/Logo';
import { smoothScrollTo } from '@/utils/smoothScroll';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: 'whats-next', label: 'Что ждет', href: '#whats-next' },
    { id: 'route', label: 'Маршрут', href: '#route' },
    { id: 'bingo', label: 'Бинго', href: '#bingo' },
    { id: 'faqs', label: 'FAQs', href: '#faqs' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Проверяем при монтировании
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    setIsMenuOpen(false);
    
    // Добавляем задержку для полного закрытия меню
    setTimeout(() => {
      // Получаем актуальную высоту хедера
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 80;
      
      smoothScrollTo(id, headerHeight + 20); // Добавляем небольшой отступ
      
      // На случай, если страница уже прокручена
      window.dispatchEvent(new Event('scroll'));
    }, 350); // Увеличиваем задержку для анимации закрытия меню
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" 
        className={styles.logoLink}>
          <Logo size={isMobile ? 'small' : 'medium'} />
        </Link>
        
        {isMobile ? (
          <>
            <div 
              className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`}
              onClick={toggleMenu}
              aria-label="Меню"
              role="button"
              tabIndex={0}
            >
              <Image
                src={isMenuOpen ? "/images/burger-close.png" : "/images/burger.png"}
                alt={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                width={24}
                height={24}
                className={styles.burgerIcon}
              />
            </div>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
              <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavList}>
                  {navItems.map((item) => (
                    <li key={item.id} className={styles.mobileNavItem}>
                      <Link 
                        href={item.href} 
                        className={styles.mobileNavLink}
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        ) : (
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.id} className={styles.navItem}>
                  <Link 
                    href={item.href} 
                    className={styles.navLink}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};