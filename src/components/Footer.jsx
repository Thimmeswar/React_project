import styles from "./footer.module.css";
export default function Footer({ completesTodo, totalTodos }) {
  return (
    <div className={styles.lastFooter}>
      <span className={styles.items}>completesTodo: {completesTodo}</span>
      <span>completesTodo: {totalTodos}</span>
    </div>
  );
}
