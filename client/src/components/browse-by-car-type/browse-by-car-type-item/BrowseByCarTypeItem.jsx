import styles from './style.module.css';

export const BrowseByCarTypeItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={item.img} alt={item.type} />
      <h4 className={styles.type}>{item.type}</h4>
    </div>
  );
};
