import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function Searchcomp({img, text, year, type}) {
  return (
    <View style={styles.img}>
        <View>
            <Image  source={{ uri: `https://image.tmdb.org/t/p/w500${img}` }}  style={{width: 200, height: 200, marginVertical: 10}}/>
        </View>
        <View style={{marginHorizontal: 10, marginTop: 20}}>
            <Text style={{color: 'white', fontSize: 15}}>{text}</Text>
            <Text style={{}}>{year}</Text>
            <Text>{type}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})