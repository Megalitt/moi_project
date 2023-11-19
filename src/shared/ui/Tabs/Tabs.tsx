import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { ReactNode, memo, useCallback } from 'react';
import { Card } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick
  } = props;

  const clickHeandler = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [])

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab, i) => (
        <Card 
          className={cls.tab} 
          key={tab.value}
          onClick={clickHeandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
