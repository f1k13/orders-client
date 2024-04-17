import { alertEvent } from "@/entities/alert/lib/alert-event";
import { api } from "@/shared/api/api";
import { setToken } from "@/shared/lib/localstorage/token-handlers";
import { AxiosError } from "axios";
import { createEffect } from "effector";
import { authEvent } from "./auth-event";

export const registerFx = createEffect<
    { username: string; password: string },
    AxiosError
>(async (params) => {
    try {
        const { data } = await api.post("/auth/registration", {
            ...params,
        });
        setToken(data.token);
        alertEvent({
            theme: "success",
            title: "Успешная регистрация",
            message: "Вы успешно зарегистрировали свой аккаунт",
        });
        authEvent(true)
        return data;
    } catch (error) {
        alertEvent({
            theme: "danger",
            title: "Произошла ошибка",
            message: "Аккаунт с таким username уже существует",
        });
        authEvent(false);
        return error;
    }
});
