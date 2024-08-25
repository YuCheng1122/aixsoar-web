import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>aixsoar</div>
      <div className={styles.text}>
        AIXSOAR © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
