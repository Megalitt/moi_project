import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string;

}

const ArticleEditPage = memo(({className}: ArticleEditPageProps) => {
  const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
  return (
    <div className={classNames(cls.ArticleEditPage, {}, [className])}>
      <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Редактирование статьи с ID = ') + id
                : t('Создание новой статьи')}
        </Page>
    </div>
  );
});
export default ArticleEditPage;