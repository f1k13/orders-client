import { alertEvent } from "@/entities/alert/lib/alert-event";
import { api } from "@/shared/api/api";
import { CommentDataType } from "@/shared/types/comment-type";
import { createEffect } from "effector";

export const createCommentFx = createEffect(async (params: CommentDataType) => {
  try {
    const { data } = await api.post("/comments/create", { ...params });
    alertEvent({
      theme: "success",
      title: "Комментарий успешно добавлен",
      message: "Вы успешно добавили комментарий к заявке",
    });

    return data;
  } catch (error) {
    alertEvent({
      theme: "danger",
      title: "Произошла ошибка при добавлении комментария",
      message: "Не удалось добавить комментарий",
    });
  }
});
