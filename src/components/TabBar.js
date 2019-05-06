import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation';

import { withTheme } from '../core/themeProvider';

const style = StyleSheet.create({
  label: { fontSize: 22, fontWeight: '400' },
});

const TabBar = (props) => {
  const { theme } = props;

  return (
    <BottomTabBar
      {...props}
      activeTintColor={theme.backgroundColor}
      labelStyle={style.label}
    />
  );
};

export default withTheme(TabBar);
