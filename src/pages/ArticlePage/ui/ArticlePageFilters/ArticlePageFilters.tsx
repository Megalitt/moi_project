import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePageFilters.module.scss';
import { memo, useCallback} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from 'pages/ArticlePage/model/selectors/articlesPageSelectors';
import { ArticleSortField, ArticleTypeTabs, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlePage/model/slice/articlesPageSlice';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { ArticlesSortSelector } from 'entities/Article/ui/ArticlesSortSelector/ArticlesSortSelector';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem} from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';


interface ArticlePageFiltersProps {
  className?: string;

}

export const ArticlePageFilters = memo(({className}: ArticlePageFiltersProps) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const featchData = useCallback(() => {
    dispatch(fetchArticlesList({replace: true}));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(featchData, 500);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
}, [dispatch]);
  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    featchData()
}, [dispatch, featchData]);
  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    featchData()
}, [dispatch, featchData]);
  const onChangeSearch= useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData()
}, [dispatch, debouncedFetchData]);
  const onChangeType= useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData()
}, [dispatch, debouncedFetchData]);


  return (
    <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticlesSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView}/>
      </div>
      <Card className={cls.search}>
        <Input 
          placeholder={'Поиск'}
          onChange={onChangeSearch} value={search}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  );
});
