import {classNames} from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';

import './styles/index.scss';
import { useSelector } from 'react-redux';


const App = () => {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited)

  useEffect(() => {
      dispatch(userActions.initAuthData());
  }, [dispatch]);

  

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar/>
        <div className='contetnt-page'>
          <Sidebar/>
          {inited && <AppRouter/>}
        </div>
      </Suspense>
    </div>
  );
};

export default App;

// 14:21
