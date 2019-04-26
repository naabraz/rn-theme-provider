import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  theme,
  themes,
} from '../core/themeProvider';

const style = StyleSheet.create({
  container: { flex: 1 },
  headline: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '200',
    fontSize: 24,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: { fontWeight: 'bold' },
});

// eslint-disable-next-line react/prop-types
const renderItem = ({ item }) => (
  <TouchableOpacity>
    <View
      style={[
        style.itemContainer,
        {
          backgroundColor: item.backgroundColor,
        },
      ]}
    >
      <Text style={[style.itemText, { color: item.color }]}>{item.key}</Text>
    </View>
  </TouchableOpacity>
);

const SettingsScreen = () => (
  <FlatList
    style={style.container}
    ListHeaderComponent={
      <Text style={[style.headline, { color: theme.backgroundColor }]}>Choose Your Theme</Text>
    }
    data={themes}
    renderItem={renderItem}
  />
);

export default SettingsScreen;
