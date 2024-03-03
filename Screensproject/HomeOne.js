import { View, Text } from 'react-native'
import * as React from 'react'

export default function HomeOne({navigation}) {
  return (
    <View>
      <Text onPress={()=>navigation.navigate('Screen5home')}>HomeOne</Text>
    </View>
  )
}