import { api } from "@/shared/api/api";
import { setToken } from "@/shared/lib/localstorage/token-handlers";
import { AxiosError } from "axios";
import { createEffect } from "effector";
import { authEvent } from "./auth-event";
import { alertEvent } from "@/entities/alert/lib/alert-event";

export const loginFx = createEffect<
  { username: string; password: string },
  AxiosError
>(async (params) => {
  try {
    const { data } = await api.post("/auth/login", {
      ...params,
    });
    setToken(data.token);
    alertEvent({
      theme: "success",
      title: "Успешный вход",
      message: "Вы успешно вошли в свой аккаунт",
    });
    authEvent(true);
    return data;
  } catch (error) {
    alertEvent({
      theme: "danger",
      title: "Произошла ошибка",
      message: "Неверный логин или пароль",
    });
    return error;
  }
});
