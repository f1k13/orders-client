import { HOME_ROUTE, REGISTER_ROUTE } from "@/shared/router/paths";
import styles from "../styles/login-form.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "effector-forms";
import { useUnit } from "effector-react";
import { FormEvent, useEffect, useMemo } from "react";
import { Text, TextInput, Button, Link } from "@gravity-ui/uikit";
import { errorsList } from "@/shared/lib/errors-handlers/error-list";
import { $auth } from "@/entities/auth/model/auth";
import { loginForm } from "../lib/login-form-state";
const LoginForm = () => {
    const navigate = useNavigate();
    const { fields, submit } = useForm(loginForm);
    const isAuth = useUnit($auth);
    console.log(isAuth);
    const errorUsername = useMemo(() => {
        if (fields.username.firstError?.rule) {
            return errorsList[fields.username.firstError.rule];
        }
    }, [fields.username]);
    const errorPassword = useMemo(() => {
        if (fields.password.firstError?.rule) {
            return errorsList[fields.password.firstError.rule];
        }
    }, [fields.password]);
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
                    errorMessage={errorUsername}
                    validationState={errorUsername ? "invalid" : undefined}
                />
                <TextInput
                    value={fields.password.value}
                    onChange={(e) => fields.password.onChange(e.target.value)}
                    placeholder="Пароль"
                    size="xl"
                    errorPlacement="inside"
                    errorMessage={errorPassword}
                    validationState={errorPassword ? "invalid" : undefined}
                />
                <Button type="submit" view="normal" size="xl">
                    Войти
                </Button>
            </form>
            <Text>
                Нет аккаунта?{" "}
                <Link onClick={() => navigate(REGISTER_ROUTE)}>Создать</Link>
            </Text>
        </div>
    );
};

export default LoginForm;
