import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation';

import { withTheme } from '../core/themeProvider';

// @flow

const style = StyleSheet.create({
  label: { fontSize: 22, fontWeight: '400' },
});

type Props = {
  theme: Object
}

const TabBar = (props: Props) => {
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
