import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { memo, useCallback } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePatch } from 'shared/config/routeConfig/routeConfig';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;

}

export const ArticleDetailsPageHeader = memo(({className}: ArticleDetailsPageHeaderProps) => {
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
  navigate(RoutePatch.article)
  }, []);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePatch.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button 
        onClick={onBackToList} 
        theme={ThemeButton.OUTLINE}
      >
        {'Назад к списку'}
      </Button>
      {canEdit && <Button 
        className={cls.editBtn} 
        theme={ThemeButton.OUTLINE}
        onClick={onEditArticle}
      >
        {'Редактировать'}
      </Button>}
    </div>
  );
});
