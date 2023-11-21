import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePatch } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItem } from 'widgets/Sidebar/model/selectors/getSidebarItem';
import { VStack } from 'shared/ui/Stack/VStack/VStack';


interface SidebarProps {
  className?: string;
  
}

export const Sidebar = memo(({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const sidebarItemList = useSelector(getSidebarItem);

  const onTiggle = () => {
    setCollapsed(state => !state)
  }
  const itemsList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem
        item={item}
        collapsed={collapsed}
        key={item.path}
    />
  )), [collapsed, sidebarItemList]);

  return (
    <menu className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <Button 
        onClick={() => onTiggle()}
        className={cls.collapsBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack role='navigation' gap='8' className={cls.items}>
        {itemsList}
      </VStack >
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher 
          short={collapsed} 
          className={cls.lang}/>
      </div>
    </menu>
  );
});
