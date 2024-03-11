import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput,} from 'react-native-paper';
import React from 'react';





export const Register =(navigation)=> {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center',}}>
        <Image source={require('../assets/cutie.jpeg')} style={styles.image}/>
        <Text style={{fontWeight: "bold", fontSize: 30}}> Register</Text>
      </View>
      <View style={styles.input}>
        <TextInput
        style={{width:'80%', borderRadius:10, backgroundColor:' #ffffff',border:'none'}}
        label='Username'
        left={<TextInput.Icon size={15} icon={'home'} color={'#f2bf07'} backgroundColor={' #f5d498'} />}/>

        <TextInput
        style={{width:'80%', borderRadius:10, marginTop:20, backgroundColor:' #ffffff',border:'none'}}
        label='Email'
        left={<TextInput.Icon size={15} icon={'mail'} color={'#1ac4a8'} backgroundColor={'#baf5eb'} 
        />}/>

        <TextInput
        style={{width:'80%', borderRadius:10, marginTop:20, backgroundColor:' #ffffff', border:'none'}}
        label='Password'
        left={<TextInput.Icon size={15} icon={'lock'} color={'#8ab9f2'} backgroundColor={'#c1daf7'} />}/>
  
      </View>
      <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 15 ,textAlign:'center', backgroundColor: 'black', color: 'white', width: '80%', borderRadius: 20, padding: 12, justifyContent: 'center',alignItems: 'center', marginLeft: 50}}> Register</Text>
      <View style={styles.icons}>
                <TouchableOpacity>
                    <Icon name="facebook" size={30} color="blue" backgroundColor={'white'} borderRadius={10}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="google" size={30} color="red" backgroundColor={'white'}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="apple" size={30} color="black" backgroundColor={'white'}/>
                </TouchableOpacity>
      </View> 
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f2f2f2',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },

  icons:{
    flexDirection: 'row',
    marginTop: 50,
    display: 'flex',
    gap: 100,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  input:{
    marginTop: 40,
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  }

 
});
export default Register;