import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://wallpapers.com/images/high/joker-pictures-vr1vkh3ff48da260.webp'};

const App = () => {
    return(
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{ textAlign:'left', marginLeft:10}}>
      <Text style={styles.text}>Enjoy your favorite movies everywhere</Text>
      <Text style={{color:'white', fontSize:15}}>Browse through our collection and siscover hundreds of movies and series that you will love</Text>
      </View>
      <Text style={styles.press}> Get started</Text>
    </ImageBackground>

    
  </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    
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
    marginBottom: 10,
    marginTop: 195
  }
});

export default App;