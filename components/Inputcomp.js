import { View, Text, Image } from 'react-native'
import React from 'react'

const Inputcomp = ( {image, text}) => {
  return (
    <View>
      <Image  source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}  style={{width: 400, height: 370, marginHorizontal: 10}}/>
      <Text style={{position: 'absolute', backgroundColor:'#f1b91c', color: 'black', right: 10, top: 10, borderRadius: 4, width: 30, textAlign: 'center', padding: 0}}>{text}</Text>
    </View>
  )
}

export default Inputcomp