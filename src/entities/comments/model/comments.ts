import { CommentDataType } from "@/shared/types/comment-type";
import { createStore } from "effector";
import { getCommentsFx } from "../lib/get-comments";
import { createCommentFx } from "../lib/create-comment";

export const $comments = createStore<CommentDataType[]>([])
  .on(getCommentsFx.doneData, (_, data) => data)
  .on(getCommentsFx.failData, () => [])
  .on(createCommentFx.doneData, (state, data) => [...state, data])
  .on(createCommentFx.failData, (state) => state);
