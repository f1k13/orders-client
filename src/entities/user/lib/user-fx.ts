import { alertEvent } from "@/entities/alert/lib/alert-event";
import { authEvent } from "@/entities/auth/lib/auth-event";
import { api } from "@/shared/api/api";
import { UserDataType } from "@/shared/types/user-type";
import { createEffect } from "effector";

export const getUserFx = createEffect<void, UserDataType, Error>(async () => {
    try {
        const { data } = await api.get("/users/self");
        authEvent(true);
        return data;
    } catch (error) {
        return error;
    }
});
