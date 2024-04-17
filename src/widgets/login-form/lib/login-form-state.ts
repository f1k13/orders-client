import { loginFx } from "@/entities/auth/lib/login-fx";
import { checkLength, required } from "@/shared/lib/validators";
import { sample } from "effector";
import { createForm } from "effector-forms";

export const loginForm = createForm({
    fields: {
        username: {
            init: "",
            rules: [required(), checkLength(3, 15)],
        },
        password: {
            init: "",
            rules: [required(), checkLength(6, 20)],
        },
    },
    validateOn: ["submit"],
});

sample({
    clock: loginForm.formValidated,
    target: loginFx,
});
