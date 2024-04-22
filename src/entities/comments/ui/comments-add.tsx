import { FormEvent, useState } from "react";
import styles from "./styles/comments.module.scss";
import { Button, TextArea } from "@gravity-ui/uikit";
import { createCommentFx } from "../lib/create-comment";
import { useUnit } from "effector-react";
import { $orderId } from "@/entities/orders/model/orders";

const CommentAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const orderId = useUnit($orderId);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      setError("Поле обязательно к заполнению");
      return;
    }
    console.log(orderId);
    createCommentFx({
      title,
      orderId,
    });
  };
  return (
    <form onSubmit={onSubmit} className={styles.root}>
      <TextArea
        value={title}
        validationState={error ? "invalid" : undefined}
        errorMessage={error}
        onChange={(e) => setTitle(e.target.value)}
        size="xl"
        rows={2}
        placeholder="Добавить комментарий"
      />
      <Button type="submit" size="l">
        Добавить комментарий
      </Button>
    </form>
  );
};

export default CommentAdd;
