import { CommentAdd, CommentsList } from "../ui";

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
