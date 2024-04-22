import { UserDataType } from "@/shared/types/user-type";
import { createStore } from "effector";
import { getUserFx } from "../lib/user-fx";

export const $user = createStore<UserDataType | null>(null)
  .on(getUserFx.doneData, (_, user) => user)
  .on(getUserFx.failData, () => null);
