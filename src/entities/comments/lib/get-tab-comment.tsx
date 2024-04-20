import { CommentAdd } from "../ui";
import CommentsList from "../ui/comments-list";

type TabDataType = {
  id: string;
  component: JSX.Element;
};

export const tabData: TabDataType[] = [
  {
    id: "1",
    component: <CommentAdd />,
  },
  {
    id: "2",
    component: <CommentsList />,
  },
];
