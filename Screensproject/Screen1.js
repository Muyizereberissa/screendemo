import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const image = {uri: 'https://media.wired.com/photos/5db0965e60047600090d3a68/16:9/w_2287,h_1286,c_limit/Culture_jokerstairs_rev-1-JOK-19666_High_Res_JPEG.jpg'};

const Screen1 = ({navigation}) => { 
  return(
    
  
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{ alignItems:'center', marginLeft:10,position: 'absolute', marginTop: 350 }}>
        <Text style={styles.text}>Enjoy your favorite movies everywhere</Text>
        <Text style={{color:'white', fontSize:15, textAlign: 'center'}}>Browse through our collection and siscover hundreds of movies and series that you will love</Text>
      </View>
      <View style={{height: 100}}></View>
      <TouchableOpacity  onPress={() => navigation.navigate('Screen2')}>
        <Text style={styles.press}> Get started</Text>
      </TouchableOpacity>
    </ImageBackground>

    
  </View>
  
  )
  };
  export default Screen1

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor:'',

  },
  image: {
    height: '100%',
    width: '100%',
    
  },
  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 50,
    fontWeight: 'bold',
   
  
  },
  press:{
    backgroundColor: 'yellow',
    color:'black',
    textAlign: 'center',
    marginTop: 650,
    padding: 10,
    borderRadius: 10,
  }
});

