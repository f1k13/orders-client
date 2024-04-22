import { ReactNode } from "react";
import styles from "./styles/layout.module.scss";
import { Header } from "@/widgets/header/ui";
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
