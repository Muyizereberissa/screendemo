import { StyleSheet, Text, View , Image, ImageBackground, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Profile = () => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('List')}></Text>
      <View style={{height: 50}}></View>
      <View>
        <Text style={{color: 'white', marginLeft: 20}}>More</Text>
      </View>
      <View>
        <View>
          <Image source={require('../assets/me.jpeg')} style={{width: 150, height: 150, alignSelf: 'center', marginTop: 10, borderRadius: 100}}/>
        </View>
        <View>
          <Text style={{color: 'white', alignSelf: 'center', marginTop: 20}}>Berissa Muyizere</Text>
          <Text style={{color: '#858481', alignSelf: 'center',}}> m.berissa@gmail.com</Text>
        </View>
        <Feather name={'edit'} size={20} color='orange' alignSelf='center'/>

      </View>
      <View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <AntDesign name={'inbox'} size={20} color={'white'}/>
          <Text style={{color: 'white', marginLeft: 10}}> Inbox</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, }}>
          <MaterialCommunityIcons name={'account-outline'} size={20} color={'white'}/>
          <Text style={{color: 'white', marginLeft: 10}}> Account Settings</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <AntDesign name={'setting'} size={20} color={'white'}/>
          <Text style={{color: 'white', marginLeft: 10}}>App settings</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Feather name={'dribbble'} size={20} color={'white'}/>
          <Text style={{color: 'white', marginLeft: 10}}>Language</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Feather name={'alert-circle'} size={20} color={'white'}/>
          <Text style={{color: 'white', marginLeft: 10}}>Help</Text> 
        </View>
        <View style={{height: 30}} ></View>
        <View>
          <Text> Terms & Conditions</Text>
          <Text> Privacy & Policy</Text>
        </View>
      </View>
      <View style={{height: 50}}></View>
      <Button title="Logout" backgroundColor={'#26282C'}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
    
  }
})