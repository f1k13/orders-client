import { Alert } from "@gravity-ui/uikit";
import { useUnit } from "effector-react";
import { $alert } from "../model/alert";
import styles from "./styles/alert.module.scss";
const AlertNotification = () => {
  const alert = useUnit($alert);
  return (
    <ul className={styles.root}>
      {alert.map((item) => (
        <Alert
          className={styles.item}
          key={item.id}
          theme={item.theme}
          title={item?.title}
          message={item?.message}
          view="filled"
          layout="horizontal"
          corners="rounded"
          align="center"
        />
      ))}
    </ul>
  );
};

export default AlertNotification;
