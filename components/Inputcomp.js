import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Inputcomp = ({title, image, text, trend}) => {
  return (
    <View>
      <View >
      <Image source={image} style={{height: 150, width: 250}}/>
      <Text style={{position: 'absolute', backgroundColor:'#f1b91c', color: 'black', right: 10, top: 10, borderRadius: 4, width: 30, textAlign: 'center', padding: 0}}>{text}</Text>
      </View>
      <Text>{trend}</Text>
     
    </View>
  )
}

export default Inputcomp

const styles = StyleSheet.create({})