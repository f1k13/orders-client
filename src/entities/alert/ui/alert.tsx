import { Alert } from "@gravity-ui/uikit";
import { useUnit } from "effector-react";
import { $alert } from "../model/alert";
const AlertNotification = () => {
  const alert = useUnit($alert);
  return (
    <>
      {alert.map((item) => (
        <Alert
          key={item.id}
          theme={item.theme}
          title={item?.title}
          message={item?.message}
          view="outlined"
          layout="horizontal"
          corners="rounded"
          align="center"
        />
      ))}
    </>
  );
};

export default AlertNotification;
