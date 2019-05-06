import React, { useContext } from 'react';

import THEMES from './themes.json';

export const themes = THEMES;
export const theme = THEMES[1];

export function withTheme(Component) {
  return (props) => {
    const { themes, theme } = useContext(ThemeContext);

    return <Component {...props} themes={themes} theme={theme} />;
  };
}
