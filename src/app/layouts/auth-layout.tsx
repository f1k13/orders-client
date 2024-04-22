import { ReactNode } from "react";
import styles from "./styles/layout.module.scss";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.authRoot}>{children}</div>;
};

export default AuthLayout;
