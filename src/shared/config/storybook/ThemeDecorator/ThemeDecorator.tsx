import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator: Decorator = (Story) => (
  <div className={`app ${Theme.LIGHT}`}>
    <Story/>
  </div>
)