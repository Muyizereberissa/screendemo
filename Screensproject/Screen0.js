import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'


const Screen0 = ({navigation}) => {

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Screen0'); // Navigate to the main screen after 2 seconds
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.muvi}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold', backgroundColor: '#F3B917',paddingLeft: 12,paddingRight: 12, borderRadius: 7}}>M</Text>
        <Text  onPress={() => navigation.navigate('Screen1')}style={{  fontSize: 35, fontWeight: 'bold', color: 'white', paddingLeft: 7}}>Muvi</Text>
      </View>
    </View>
  )
}

export default Screen0

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  muvi:{
    flexDirection: 'row',
  }
})