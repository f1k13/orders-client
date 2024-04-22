import { useUnit } from "effector-react";
import { $comments } from "../model/comments";
import { Card, Text } from "@gravity-ui/uikit";
import styles from "./styles/comments.module.scss";
const CommentsList = () => {
  const comments = useUnit($comments);
  console.log(comments);

  return (
    <ul className={styles.list}>
      {comments.length > 0 ? (
        comments.map((item) => (
          <Card key={item.id} className={styles.item}>
            {item.title}
          </Card>
        ))
      ) : (
        <Text className={styles.text} variant="body-3">
          Комментариев нет
        </Text>
      )}
    </ul>
  );
};

export default CommentsList;
