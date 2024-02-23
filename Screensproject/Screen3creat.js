import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from 'react-native-vector-icons';


const Screen3creat=({navigation})=>  {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 60, alignSelf: 'center', }}>
            <Text  style={{color: '#353633', fontSize: 30, fontWeight: 'bold',  backgroundColor: 'orange',paddingLeft: 10, borderRadius: 10, textAlign: 'center'}}>M</Text>
            <Text style={{fontWeight:'bold', fontSize:30, color: 'white'}}>Muvi</Text>
        </View>
        <View style={{height: 350}}></View>
        <View style={{ alignItems: 'center', color: 'black'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', }}>Welcome to Muvi</Text>
            <Text style={{textAlign: 'center', color: 'white',}}>Look back and reflect on your memories and growth over time</Text>
        </View>
        <View style={{height: 30}}></View>
        <View>
          <TouchableOpacity style={{  flexDirection: 'row', gap: 10, backgroundColor: 'black', padding: 10, borderRadius: 7, width: 350 , marginLeft: 30}}>
              <FontAwesome name="apple" size={19} color="white" style={{ marginLeft: 90, }} />
              <Text style={{ color: 'white', fontSize: 15, marginLeft: 10 }}>Sign up with Apple</Text>
          </TouchableOpacity>
            
        </View>
        <View>
        <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', padding: 7, borderRadius: 8, width: 350 , marginLeft: 30 }}>
            <FontAwesome name="google" size={20} color="red" style={{ marginLeft: 90 }} />
            <Text style={{ color: 'black', fontSize: 16 ,marginLeft: 10}}>Sign up with Google</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={{ marginTop: 15, backgroundColor: '#FDD32C', padding: 10, borderRadius: 7, width: 350 , marginLeft: 30}} >
            <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center' }}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15, alighnitems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center', marginTop: 15 }}>Already have an account?</Text>
            <TouchableOpacity   onPress={() => navigation.navigate('Screen5home')}>
              <Text style={{ color: 'orange', fontSize: 15, alignSelf: 'center', marginTop: 15 }}> Log in</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
};
export default Screen3creat

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
  }
})