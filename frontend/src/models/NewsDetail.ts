import { News } from "./News";

export type NewsDetail = News & {
  content: string;
};