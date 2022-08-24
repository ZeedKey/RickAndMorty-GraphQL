import styles from './footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.footer__text}>
        Make with ❤️ for the MobProgramming team
      </h1>
    </footer>
  );
};
