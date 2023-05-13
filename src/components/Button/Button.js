import styles from './Button.module.css';

export default function loadMoreButton({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
}
