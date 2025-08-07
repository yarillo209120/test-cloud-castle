import React from 'react';
import Image from 'next/image';
import styles from './Logo.module.scss';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  priority?: boolean;
}

const sizeMap = {
  small: { width: 95, height: 27 },
  medium: { width: 95, height: 27 },
  large: { width: 95, height: 27 },
};


export const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  className = '',
  priority = false,
}) => {
  const dimensions = sizeMap[size];
  
  return (
    <div className={`${styles.logo} ${styles[size]} ${className}`}>
      <Image
        src="images/main-logo.webp"
        alt="Логотип"
        width={dimensions.width}
        height={dimensions.height}
        className={styles.logoImage}
        priority={priority}
      />
    </div>
  );
};