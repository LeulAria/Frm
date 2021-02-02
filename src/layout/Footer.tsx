import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a>{new Date().getFullYear()} &nbsp; TecHawks</a>
    </footer>
  );
};

export default Footer;
