import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesSortSelector.module.scss';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;

}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort
  } = props;
  const orderOptions = useMemo<SelectOptions[]>(() => [
    {
      value: 'asc',
      content: 'возрастанию'
    },
    {
      value: 'desc',
      content: 'убыванию'
    },
  ], []);

  const sortFiledOptions = useMemo<SelectOptions[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: 'дате создания'
    },
    {
      value: ArticleSortField.TITLE,
      content: 'названию'
    },
    {
      value: ArticleSortField.VIEWS,
      content: 'просмотрам'
    },
  ], []);

  const changeSortHeandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField)
  }, [onChangeSort]);
  const changeOrderHeandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder)
  }, [onChangeOrder]);
 

  return (
    <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
      <Select 
        options={sortFiledOptions} 
        label={'Сортировать по '}
        value={sort}
        onChange={changeSortHeandler}
      />
      <Select 
        options={orderOptions} 
        label={'по '}
        value={order}
        onChange={changeOrderHeandler}
        className={cls.order}
      />
    </div>
  );
});
