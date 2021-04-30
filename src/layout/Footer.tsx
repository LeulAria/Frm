import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a>{new Date().getFullYear()} &nbsp; Remedy</a>
    </footer>
  );
};

export default Footer;
