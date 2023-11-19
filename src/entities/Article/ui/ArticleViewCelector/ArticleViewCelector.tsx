import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article/model/types/article';
import ListIcon from 'shared/assets/icons/burger.svg';
import TiledIcon from 'shared/assets/icons/okno.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewCelectorProps {
  className?: string;
  view: ArticleView,
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
  },
]

export const ArticleViewSelector = memo((props: ArticleViewCelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
};
  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
    {viewTypes.map((viewType, i) => (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onClick(viewType.view)}
            key={i}
        >
            <Icon
                Svg={viewType.icon}
                className={classNames('', { [cls.notSelected]: viewType.view !== view })}
            />
        </Button>
    ))}
  </div>
  );
});
