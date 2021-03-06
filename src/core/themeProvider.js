import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import THEMES from './themes.json';

const STORAGE_KEY = 'THEME_ID';
const ThemeContext = React.createContext();

// @flow

type Props = {
  children: Object
}

export const ThemeContextProvider = (props: Props) => {
  const { children } = props;
  const [themeID, setThemeID] = useState();

  useEffect(() => {
    (async () => {
      const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedThemeID) setThemeID(storedThemeID);
      else setThemeID(THEMES[1].key);
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID }}>
      {themeID ? children : null}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  return (props) => {
    const { themeID, setThemeID } = useContext(ThemeContext);

    const getTheme = id => THEMES.find(theme => theme.key === id);
    const setTheme = (id) => {
      AsyncStorage.setItem(STORAGE_KEY, id);
      setThemeID(id);
    };

    return (
      <Component
        {...props}
        themes={THEMES}
        theme={getTheme(themeID)}
        setTheme={setTheme}
      />
    );
  };
}
