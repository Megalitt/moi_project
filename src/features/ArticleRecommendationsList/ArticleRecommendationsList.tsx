import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ArticleRecommendationsList.module.scss';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';


interface ArticleRecommendationsListProps {
  className?: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      }),
    }),
  }),
});

const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const {
    className,
  } = props;

  const {isLoading, data} = useArticleRecommendationsList(3)

  return (
    <VStack gap='8' className={classNames('', {}, [className])}>
       <Text
          size={TextSize.L} 
          title={'Рекоменуем'}
        />
        <ArticleList 
          articles={[]}  
          target="_blank"
        />
    </VStack>
  );
});
