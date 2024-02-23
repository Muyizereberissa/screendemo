import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'


const ScreenImages= ({image}) => {
  return (
    <View>
      <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
      <Image source={image}/>
    </View>
  )
}

export default Inputcomp

const styles = StyleSheet.create({})