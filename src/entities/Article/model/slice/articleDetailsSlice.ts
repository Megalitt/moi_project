import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleByid } from '../services/fetchArticleByid/fetchArticleByid';
import { Article } from '../types/article';



const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetailsSlice',
    initialState,
    reducers: {
     
    }, 
    extraReducers: (builder) => {
      builder
        .addCase(fetchArticleByid.pending, (state) => {
          state.error = undefined;
          state.isLoading = true;
        })
      
        .addCase(fetchArticleByid.fulfilled, (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        })
        
        .addCase(fetchArticleByid.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })   
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;