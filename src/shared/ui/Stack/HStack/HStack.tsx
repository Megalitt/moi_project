import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HStack.module.scss';
import { memo } from 'react';


interface HStackProps {
  className?: string;
}

export const HStack = memo((props: HStackProps) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(cls.HStack, {}, [className])}>
      
    </div>
  );
});

