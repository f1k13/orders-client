import { Alert } from "@gravity-ui/uikit";
import { useUnit } from "effector-react";
import { $alert } from "../model/alert";
const AlertNotification = () => {
    const alert = useUnit($alert);
    return (
        <Alert
            theme={alert.theme}
            title={alert?.title}
            message={alert?.message}
            view="outlined"
            layout="horizontal"
            corners="rounded"
            align="center"
        />
    );
};

export default AlertNotification;
