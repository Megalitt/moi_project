import { FC, useMemo, useState } from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProps {
  children: JSX.Element;
  initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProps> = (props) => {
  const {
    initialTheme,
    children,
} = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
