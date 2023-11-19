import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { Article, ArticleTextBlock, ArticleType, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import Oko from 'shared/assets/icons/oko.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePatch } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view = ArticleView.SMALL,
    target
  } = props;

  const types = <Text text={article.type.join(',')} className={cls.types}/>;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views}/>
      <Icon Svg={Oko}/>
    </>
  );

  
  if(view === ArticleView.BIG){
    const textBlock = article.blocks.find(block => block.type === ArticleType.TEXT) as ArticleTextBlock;
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar}/>
            <Text text={article.user.username} className={cls.username}/>
            <Text text={article.createdAt} className={cls.date}/>
          </div>
          <Text title={article.title} className={cls.title}/>
          {types}
          <img src={article.img} className={cls.img}/>
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
          )}
          <div className={cls.footer}>
          <AppLink
            target={target}
            to={RoutePatch.article_details + article.id}
          >
            <Button theme={ThemeButton.OUTLINE}>
                {('Читать далее...')}
            </Button>
          </AppLink>
            {views}
          </div>
        </Card>
      </div>
      
    )
  }

  return (
    <AppLink 
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      target={target}
      to={RoutePatch.article_details + article.id}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} className={cls.img}/>
          <Text text={article.createdAt} className={cls.date}/>
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title}/>
      </Card>
    </AppLink>
  );
});
