import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { theme } from '../core/themeProvider';

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

const MainScreen = () => (
  <View style={[style.container, { backgroundColor: theme.backgroundColor }]}>
    <Text style={[style.text, { color: theme.color }]}>Main Part</Text>
  </View>
);

export default MainScreen;
