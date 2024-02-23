import { View, Text, Image } from 'react-native'
import React from 'react'

const Imagecomp = ( {image, text}) => {
  return (
    <View>
      <Image source={image} style={{width:450, height: 200}}/>
      <Text style={{position: 'absolute', backgroundColor:'#f1b91c', color: 'black', right: 10, top: 10, borderRadius: 4, width: 30, textAlign: 'center', padding: 0}}>{text}</Text>
    </View>
  )
}

export default Imagecomp