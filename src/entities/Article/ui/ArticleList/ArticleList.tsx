import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading = true,
    view = ArticleView.SMALL,
    target,
  } = props;

  const getSkeleton = (view: ArticleView) => {
    return (
      new Array(view === ArticleView.SMALL ? 9 : 3)
      .fill(0)
      .map((item, i) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={i}/>
      ) )
    )
  };


  const renderArticle = (article: Article) => (
    <ArticleListItem 
      article={article} 
      view={view}
      className={cls.card}
      key={article.id}
      target={target}
    />
  )
  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeleton(view)}
    </div>
  );
});
