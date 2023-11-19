import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { BrowserRouter, Link, LinkProps } from 'react-router-dom';
import { FC, ReactNode, memo } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to, 
    className, 
    theme = AppLinkTheme.PRIMARY, 
    children,
    ...otherProps
  } = props;
  return (
      <Link 
        to={to} 
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
  );
});
