import { StyleSheet, Text, View , Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import * as React from 'react'

const Screen2 = ({navigation}) => {
  return (
    
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginTop: 60, alignSelf: 'center', }}>
                <Text style={{color: '#353633', fontSize: 30, fontWeight: 'bold',  backgroundColor: 'orange',paddingLeft: 10, borderRadius: 10, textAlign: 'center'}}>M </Text>
                <Text style={{  fontSize: 30, fontWeight: 'bold', color: 'white', paddingLeft: 7, textAlign: 'center'}}>Muvi</Text>
            </View>
        <Image source={require('../assets/move.png')} style={{marginTop: 100, marginLeft: 100,}}/>
        <View style={{ alignItems: 'center', justifyContent: 'center', color: 'black'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', }}> Welcome to Muvi</Text>
            <Text style={{textAlign: 'center', color: 'white', flexWrap: 'wrap',}}> Free movie streaming all your needs everytime and everywhere</Text>
        </View>
        <View style={{height: 220}}></View>
        <Text style={{backgroundColor:'rgb(251,185,0)', textAlign: 'center', color: 'black', fontSize: 20, padding: 7, width: '85%',  marginLeft: 35, borderRadius: 8}}> Watch your Movie</Text>
        <View style={{height: 30}}></View>
        <TouchableOpacity  onPress={() => navigation.navigate('Screen4login')}>
          <Text  style={{textAlign: 'center',color: 'white', fontSize: 20}}> Sign in</Text>
        </TouchableOpacity>
       
        </View>
   
  )
}

export default Screen2

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
    
      
  },


})