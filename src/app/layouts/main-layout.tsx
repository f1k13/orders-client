import { ReactNode } from "react";
import styles from "./styles/layout.module.scss";
const MainLayout = ({ children }: { children: ReactNode }) => {
    return <div className={styles.root}>{children}</div>;
};

export default MainLayout;
