import { setModeEvent } from "@/entities/mode/lib/set-mode-event";
import { $mode } from "@/entities/mode/model/mode";
import { $user } from "@/entities/user/model/user";
import { Switch, User, Button, Icon } from "@gravity-ui/uikit";
import { useUnit } from "effector-react";
import styles from "./styles/header.module.scss";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { deleteToken } from "@/shared/lib/localstorage/token-handlers";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "@/shared/router/paths";
import { authEvent } from "@/entities/auth/lib/auth-event";
const Header = () => {
  const user = useUnit($user);
  const mode = useUnit($mode);
  const navigate = useNavigate();
  const handleLeave = () => {
    deleteToken();
    authEvent(false);
    navigate(LOGIN_ROUTE);
  };
  return (
    <div className={styles.root}>
      <div className={styles.start}>
        <User
          avatar={{ text: user?.username, theme: "brand" }}
          name={user?.username}
          size="xl"
        />
        <Switch onChange={() => setModeEvent(!mode)} size="l" checked={mode}>
          Режим администратора
        </Switch>
      </div>
      <Button onClick={handleLeave} view="outlined" size="xl">
        <Icon data={ArrowRightFromSquare} size={18} />
        Выход
      </Button>
    </div>
  );
};

export default Header;
