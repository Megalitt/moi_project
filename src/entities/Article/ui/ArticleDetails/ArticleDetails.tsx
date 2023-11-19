import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleByid } from 'entities/Article/model/services/fetchArticleByid/fetchArticleByid';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/oko.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';


interface ArticleDetailsProps {
  className?: string;
  id: string;
};

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({className, id}: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  
  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleType.CODE:
        return <ArticleCodeBlockComponent block={block} className={cls.block}/>;
      case ArticleType.IMAGE:
        return <ArticleImageBlockComponent block={block} className={cls.block}/>;
      case ArticleType.TEXT:
        return <ArticleTextBlockComponent block={block} className={cls.block} />;
      default:
        return null;
        
    }
  }, [])
  

useEffect(() => {
  dispatch(fetchArticleByid(id))
}, [dispatch, id]);

let content;

if(isLoading){
  content = (
    <>
      <Skeleton
        className={cls.avatar}
        width={200}
        height={200}
        border={'50%'}
      />
      <Skeleton
        className={cls.title}
        width={300}
        height={32}
      />
      <Skeleton
        className={cls.skeleton}
        width={600}
        height={24}
      />
      <Skeleton
        className={cls.skeleton}
        width="100%"
        height={200}
      />
    </>
  )
}else if(error){
  content = (
    <Text
      align={TextAlign.CENTER}
      title={'Произошла ошибка при загрузке статьи.'}
    />
  )
}else{
  content = (
    <>
      <div className={cls.avatarWrapp}>
        <Avatar 
          size={200} 
          src={article?.img} 
          className={cls.avatar}
        />
      </div>
      <Text
        className={cls.title}
        title={article?.title}
        text={article?.subtitle}
        size={TextSize.L}
      />
      <div className={cls.articleInfo}>
        <Icon Svg={EyeIcon} className={cls.icon}/>
        <Text text={String(article?.views)}/>
      </div>
      <div className={cls.articleInfo}>
        <Icon Svg={CalendarIcon} className={cls.icon}/>
        <Text text={String(article?.createdAt)}/>
      </div>
      {article?.blocks.map(renderBlock)}
    </>
  )
};

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
    
  );
});
