import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';


interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({className, children, onScrollEnd}: PageProps) => {

const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
const dispatch = useAppDispatch();
const {pathname} = useLocation();
const scrollPosition = useSelector(
  (state: StateSchema) => getUIScrollByPath(state, pathname),
);


useInfiniteScroll({
  triggerRef,
  wrapperRef,
  callback: onScrollEnd,
});

useInitialEffect(() => {
  wrapperRef.current.scrollTop = scrollPosition;
});

const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
  dispatch(uiActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
  }));
}, 500);

  return (
    <section 
      className={classNames(cls.Page, {}, [className])}
      ref={wrapperRef}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
