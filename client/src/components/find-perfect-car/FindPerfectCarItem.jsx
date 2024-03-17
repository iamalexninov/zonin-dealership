import styles from './style.module.css';

export const FindPerfectCarItem = ({ numbers, title }) => {
  return (
    <div className={styles.content}>
      <h3 className={styles.numbers}>{numbers}</h3>
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};
