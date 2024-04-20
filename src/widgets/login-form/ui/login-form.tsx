import { HOME_ROUTE, REGISTER_ROUTE } from "@/shared/router/paths";
import styles from "../styles/login-form.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "effector-forms";
import { useUnit } from "effector-react";
import { FormEvent, useEffect, useMemo } from "react";
import { Text, TextInput, Button, Link } from "@gravity-ui/uikit";
import { $auth } from "@/entities/auth/model/auth";
import { loginForm } from "../lib/login-form-state";
import { useError } from "@/shared/hooks/use-error";
const LoginForm = () => {
  const navigate = useNavigate();
  const { fields, submit } = useForm(loginForm);
  const isAuth = useUnit($auth);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };
  useEffect(() => {
    if (isAuth) navigate(HOME_ROUTE);
  }, [isAuth]);
  return (
    <div className={styles.root}>
      <Text variant="body-3">Логин</Text>
      <form onSubmit={onSubmit} className={styles.form}>
        <TextInput
          value={fields.username.value}
          onChange={(e) => fields.username.onChange(e.target.value)}
          placeholder="username"
          errorPlacement="inside"
          size="xl"
          errorMessage={useError(fields.username.firstError?.rule)}
          validationState={
            useError(fields.username.firstError?.rule) ? "invalid" : undefined
          }
        />
        <TextInput
          value={fields.password.value}
          onChange={(e) => fields.password.onChange(e.target.value)}
          placeholder="Пароль"
          size="xl"
          errorPlacement="inside"
          errorMessage={useError(fields.username.firstError?.rule)}
          validationState={
            useError(fields.username.firstError?.rule) ? "invalid" : undefined
          }
        />
        <Button type="submit" view="normal" size="xl">
          Войти
        </Button>
      </form>
      <Text>
        Нет аккаунта?{" "}
        <Button view="flat" onClick={() => navigate(REGISTER_ROUTE)}>
          Создать
        </Button>
      </Text>
    </div>
  );
};

export default LoginForm;
