import { lazy, FC } from 'react';

export const AddCommentFormAsync = lazy(async () => await import('./AddCommentForm'));