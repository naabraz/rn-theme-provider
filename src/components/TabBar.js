import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation';

import { theme } from '../core/themeProvider';

const style = StyleSheet.create({
  label: { fontSize: 22, fontWeight: '400' },
});

const TabBar = props => (
  <BottomTabBar
    {...props}
    activeTintColor={theme.backgroundColor}
    labelStyle={style.label}
  />
);

export default TabBar;
