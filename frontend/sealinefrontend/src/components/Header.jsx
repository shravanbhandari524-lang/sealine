import { Anchor, Bell } from "lucide-react";
import styles from "./style/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.brandIcon}>
          <Anchor size={18} strokeWidth={2} />
        </div>
        <span className={styles.brandName}>Sealine</span>
        <span className={styles.brandTag}>by binaryarc</span>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn} aria-label="Notifications">
          <Bell size={18} strokeWidth={1.75} />
          <span className={styles.badge} aria-hidden="true" />
        </button>
        <div className={styles.avatar} title="Admin user">
          <span>A</span>
        </div>
      </div>
    </header>
  );
}
