import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ArticleRecommendationsList.module.scss';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';


interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const {
    className,
  } = props;

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
