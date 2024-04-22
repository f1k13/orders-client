import { HOME_ROUTE, LOGIN_ROUTE } from "@/shared/router/paths";
import { Text, TextInput, Button } from "@gravity-ui/uikit";
import { useNavigate } from "react-router-dom";
import styles from "./styles/register-form.module.scss";
import { useForm } from "effector-forms";
import { registerForm } from "../lib/register-form-state";
import { FormEvent, useEffect } from "react";
import { $auth } from "@/entities/auth/model/auth";
import { useUnit } from "effector-react";
import { useError } from "@/shared/hooks/use-error";
const RegisterForm = () => {
  const navigate = useNavigate();
  const { fields, submit } = useForm(registerForm);
  const isAuth = useUnit($auth);
  console.log(isAuth);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };
  useEffect(() => {
    if (isAuth) navigate(HOME_ROUTE);
  }, [isAuth]);
  return (
    <div className={styles.root}>
      <Text variant="body-3">Регистрация</Text>
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
          errorMessage={useError(fields.password.firstError?.rule)}
          validationState={
            useError(fields.password.firstError?.rule) ? "invalid" : undefined
          }
        />
        <Button type="submit" view="normal" size="xl">
          Создать аккаунт
        </Button>
      </form>
      <Text>
        Есть аккаунт?
        <Button view="flat" onClick={() => navigate(LOGIN_ROUTE)}>
          Войти
        </Button>
      </Text>
    </div>
  );
};

export default RegisterForm;
