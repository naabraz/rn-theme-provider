import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { withTheme } from '../core/themeProvider';

// @flow

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

type Props = {
  theme: Object,
}

const MainScreen = (props: Props) => {
  const { theme } = props;

  return (
    <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[style.text, { color: theme.color }]}>Main Part</Text>
    </View>
  );
};

export default withTheme(MainScreen);
