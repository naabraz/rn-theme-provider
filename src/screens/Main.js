import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

MainScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Main Part</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold'
  }
})

export default MainScreen
