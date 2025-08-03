import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href='https://cloudcastle.ru/' target='_blank' className={styles.copyright}>© 2024 CLOUD CASTLE</a>
      </div>
    </footer>
  );
};