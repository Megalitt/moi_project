import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentByArticleid } from 'pages/ArticleDetailsPage/model/services/fetchCommentByArticleid/fetchCommentByArticleid';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { Page } from 'widgets/Page/Page';
import { getArticleRecomendations } from 'pages/ArticleDetailsPage/model/slice/articleDetailsPageRecomendationSlice';
import { getArticleRecomendationIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recomendation';
import { fetchArticleRecomendations } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecomendations/fetchArticleRecomendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';


interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {id} = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const recomendations = useSelector(getArticleRecomendations.selectAll);
  const commentsIsLoadig = useSelector(getArticleCommentsIsLoading);
  const recomendationsIsLoadig = useSelector(getArticleRecomendationIsLoading);
  const navigate = useNavigate();
  console.log('recomendations', recomendations);
  

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])
  
  useInitialEffect(() => {
    dispatch(fetchCommentByArticleid(id));
    dispatch(fetchArticleRecomendations());
  });


  if(!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    )
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader/>
        <ArticleDetails id={id}/>
        {/* <Text 
          size={TextSize.L} 
          className={cls.comentTitle} 
          title={t('Рекоменуем')}
        />
        <ArticleList 
          articles={recomendations}  
          isLoading={recomendationsIsLoadig}
          className={cls.recommendations}
          target="_blank"
        /> */}
        <Text 
          size={TextSize.L} 
          className={cls.comentTitle} 
          title={t('Комментарии')}
        />
        <AddCommentForm onSendComment={onSendComment}/>
        <CommentList
          isLoading={commentsIsLoadig}  
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
    
  );
};
export default memo(ArticleDetailsPage);