import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
  className?: string;

}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')}/>
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly 
            ? (
          <Button 
            className={cls.editBtn}
            theme={ThemeButton.OUTLINE}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
          )
          : (
          <>
            <Button 
              className={cls.editBtn}
              theme={ThemeButton.OUTLINE_RED}
              onClick={onSave}
            >
              {t('Отменить')}
            </Button>
            <Button 
              className={cls.saveBtn}
              theme={ThemeButton.OUTLINE}
              onClick={onCancelEdit}
            >
              {t('Сохранить')}
            </Button>
          </>
              
          )
          }
        </div>
      )}  
    </div>
  );
};

//33
