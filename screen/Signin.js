import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CheckBox } from "react-native-elements";
import { TextInput,} from 'react-native-paper';



export default function Signin() {
  return (
    <View style={styles.container}> 
      <Text style={{marginTop: 100, fontWeight: 'bold', fontSize: 30 ,textAlign:'center'}}> Sign In</Text>
      <Text style={{marginTop: 20, textAlign:'center'}}> Wellcome back! Please enter your details</Text>
      <StatusBar style="auto" />
      <View style={{marginTop: 70, display: 'flex', flexDirection: 'column', alignItems: 'center',width:"100%"}}>
        <TextInput 
        style={{width:'80%', borderRadius:10, backgroundColor:'#fafbfc'}}
        mode='offline'
        label='Email'
        left={<TextInput.Icon size={15} icon={'email'} color={'pink'} backgroundColor={''} />}/>
       <TextInput
        style={{width:'80%', borderRadius:10, backgroundColor:'#fafbfc',marginTop:20}}
        mode='offline'
        label='Password'
        secureTextEntry
        left={<TextInput.Icon size={15} icon={'lock'} color={'blue'} backgroundColor={'lightblue'} />}/>
        
      </View> 
      <View style={styles.checkboxcontainer}>
        <CheckBox status='unchecked'/>
        <Text style={{ fontWeight: 'bold',textAlign:'center'}}>Remember me</Text>
      </View>

      
      <View style={{flexDirection: 'row', marginTop: 70,alignItems: 'center',justifyContent: 'center'}}> 
        <Text style={{color: 'blue', fontWeight: 'bold',textAlign:'center',}}>Forgot Password?</Text>
      </View>
      <View style={{alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{marginTop: 20, backgroundColor: 'skyblue', padding: 10, width: 300, borderRadius: 15, textAlign: 'center', color: 'white',}}>Sign In</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, display: 'flex', gap: 110,alignItems: 'center',justifyContent: 'center',}}>
        <Text>Create account</Text>
        <Text style={{color: 'orange', }}>Sign Up</Text>
      </View>

      <View style={styles.icons}>
                <TouchableOpacity>
                    <Icon name="facebook" size={30} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="google" size={30} color="red" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="apple" size={30} color="black" />
                </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
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
  checkboxcontainer:{
    display:'flex',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 300,
    gap: 3,
    marginLeft: 20
  },
  // Feather:{
  //   marginTop: 30,
  //   position: 'absolute',
  //   left: 10,
  //   border: 5,
  //   borderRadius: 10
   
  // },
  // AntDesign:{
  //   marginTop: 30,
  //   position: 'absolute',
  //   left: 10,
   
  // }

});