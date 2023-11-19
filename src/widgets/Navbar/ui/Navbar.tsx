import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { memo, useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePatch } from 'shared/config/routeConfig/routeConfig';
import { Text, TextTheme } from 'shared/ui/Text/Text';


interface NavbarProps {
  className?: string;
  
}

export const Navbar = memo(({className}: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const {t} = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onToggleModal = useCallback(() => {
  setIsAuthModal(false)
  }, []);
  const onShowModal = useCallback(() => {
  setIsAuthModal(true)
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
}, [dispatch]);

  if (authData) {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
              className={cls.appName}
              title={t('Ulbi TV App')}
              theme={TextTheme.PRIMARY}
            />
            <AppLink
              to={RoutePatch.article_create}
              theme={AppLinkTheme.SECONDARY}
              className={cls.createBtn}
          >
              {t('Создать статью')}
            </AppLink>
            <Button
              theme={ThemeButton.CLEAR_INVERTED}
              className={cls.links}
              onClick={onLogout}
            >
              {t('Выйти')}
            </Button>
        </header>
    );
}

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
       <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onToggleModal}
                />
            )}
    </header>
  );
});



