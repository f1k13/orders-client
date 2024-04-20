import { $orderId } from "@/entities/orders/model/orders";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { getCommentsFx } from "../lib/get-comments";
import { $comments } from "../model/comments";
import { Card } from "@gravity-ui/uikit";
import styles from "./styles/comments.module.scss";
const CommentsList = () => {
  const orderId = useUnit($orderId);
  const comments = useUnit($comments);
  console.log(comments);
  useEffect(() => {
    getCommentsFx(orderId);
  }, [orderId]);
  return (
    <ul className={styles.list}>
      {comments.map((item) => (
        <Card key={item.id} className={styles.item}>
          {item.title}
        </Card>
      ))}
    </ul>
  );
};

export default CommentsList;
