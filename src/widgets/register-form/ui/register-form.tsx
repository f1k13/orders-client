import { HOME_ROUTE, LOGIN_ROUTE } from "@/shared/router/paths";
import { Text, TextInput, Button, Link } from "@gravity-ui/uikit";
import { useNavigate } from "react-router-dom";
import styles from "../styles/register-form.module.scss";
import { useForm } from "effector-forms";
import { registerForm } from "../lib/register-form-state";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { $auth } from "@/entities/auth/model/auth";
import { useUnit } from "effector-react";
import { errorsList } from "@/shared/lib/errors-handlers/error-list";
const RegisterForm = () => {
    const navigate = useNavigate();
    const { fields, submit } = useForm(registerForm);
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
            <Text variant="body-3">Регистрация</Text>
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
                    Создать аккаунт
                </Button>
            </form>
            <Text>
                Есть аккаунт?
                <Link onClick={() => navigate(LOGIN_ROUTE)}>Войти</Link>
            </Text>
        </div>
    );
};

export default RegisterForm;
