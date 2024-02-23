import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const Trendcomp = ( {trend}) => {
  return (
    <View >
        <TouchableOpacity >
        <Text style={{color: 'white', borderColor: '#5f6064', borderWidth: 1, borderRadius: 5, padding: 5 }}>{trend}</Text>
    </TouchableOpacity>
    </View>
    
  )
}

export default Trendcomp

