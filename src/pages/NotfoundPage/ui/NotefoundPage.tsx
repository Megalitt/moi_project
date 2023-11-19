import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotefoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotefoundPageProps {
  className?: string;

}

export const NotefoundPage = ({className}: NotefoundPageProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(cls.NotefoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
