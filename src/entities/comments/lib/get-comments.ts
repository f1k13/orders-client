import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export const getCommentsFx = createEffect(async (id: number) => {
  try {
    const { data } = await api.get(`/comments/getOfOrder?id=${id}`);
    return data;
  } catch (error) {
    return error;
  }
});
