import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig} from "app/providers/StoreProvider";
import { Article } from "../../types/article";


export const fetchArticleByid = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleByid',
  async (articleId, thunkApi) => {

    const {extra, rejectWithValue} = thunkApi;
      try {
          const response = await extra.api.get<Article>(`/articles/${articleId}`, {
            params: {
              _expand: 'user'
            }
          });
          // throw new Error();
          return response.data;
      } catch (e) {
          return rejectWithValue('error');
      }
  },
);