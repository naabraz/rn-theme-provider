import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import TabBar from './components/TabBar'
import MainScreen from './screens/Main'
import SettingsScreen from './screens/Settings'

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default AppContainer
