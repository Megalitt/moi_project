import { Article } from "./article";

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string | any;
  data?: Article;
}