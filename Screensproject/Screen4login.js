import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome,  EvilIcons, Entypo } from 'react-native-vector-icons';
import { Icon } from "react-native-elements";

const Screen4login = ( {navigation}) => {
  return (
    <View style={styles.container}>
        <View style={{height: 90}}></View>
        <View style={{flexDirection: 'row', alignSelf: 'center', }}>
            <Text  style={{color: '#353633', fontSize: 30, fontWeight: 'bold',  backgroundColor: 'orange',paddingLeft: 10, borderRadius: 10, textAlign: 'center'}}>M</Text>
            <Text style={{fontWeight:'bold', fontSize:30, color: 'white'}}>Muvi</Text>
        </View>
        <View style={{height: 30}}></View>
        <View style={{ alignItems: 'center',}}>
            <Text style={{ color: 'white', fontSize: 20, alighnSelf: 'center', marginTop: 15 }}> Please Log in to enjoy more benefits and we won't let you go</Text>
        </View>
        

        <View>
        <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: '#5F6064', marginTop: 3, padding: 5, gap: 5 ,}}>
            <FontAwesome name="envelope-o" size={13} color="orange" style={{ alignSelf: 'center' }} />
            <TextInput placeholder='e.g johndoe@gmail.com ' />
        </View> 
        {/* <TextInput
            label="Email"
            mode="offlined"
            placeholder="Email"
            right={<TextInput.Icon icon={'mail'} color='#F6A035' style={{backgroundColor: '#FDE8EA', marginLeft: '30%',}} />}
            /> */}
        <View style={{height: 15}}></View>
        <View style={{flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: '#5F6064', marginTop: 2, padding: 5, gap: 2 }}>
            <EvilIcons name="lock" size={22} color="orange" style={{ alignSelf: 'end' }} />
            <TextInput secureTextEntry placeholder='Password'/>
        </View>

        <Text style={{ marginTop: 10, color: 'white', alignSelf: 'flex-end', marginRight: 28 }}>Forgot Password?</Text>
        <View style={{height: 15}}></View>
        <View></View>
        <View>
            <TouchableOpacity>
                <Text style={styles.press}> Get started</Text>
            </TouchableOpacity>
        </View>
        <View style={{height: 10}}></View>
        <Text style={{ marginTop: 10, color: 'white', alignSelf: 'center' }}> or simply log in with</Text>
        <View style={{height: 15}}></View>
        

        <View>
            <View>
                <TouchableOpacity style={{  flexDirection: 'row', gap: 10, backgroundColor: 'black', padding: 10, borderRadius: 7, width: 400 , marginLeft: 15}}>
                    <FontAwesome name="apple" size={19} color="white" style={{ marginLeft: 90, }} />
                    <Text style={{ color: 'white', fontSize: 15, marginLeft: 30 }}>Log in with Apple</Text>
                </TouchableOpacity>
                    
                </View>
                <View style={{height: 10}}></View>
                <View>
                <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', padding: 7, borderRadius: 8, width: 400 , marginLeft: 15 }}>
                    <FontAwesome name="google" size={20} color="red" style={{ marginLeft: 90 }} />
                    <Text style={{ color: 'black', fontSize: 16 ,marginLeft: 10}}>Log in with Google</Text>
                </TouchableOpacity>
                </View>
                <View style={{height: 40}}></View>
                <View style={{flexDirection: 'row', marginTop: 15, alighnitems: 'center', justifyContent: 'center'}}>
                    <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center', marginTop: 15 }}> Don't have an account</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Screen3creat')}>

                        <Text style={{ color: 'orange', fontSize: 15, alignSelf: 'center', marginTop: 15 }}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
     


    </View>
  )
}

export default Screen4login

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#26282C',
        width: '100%',
        height: '100%',
        
    },
    press:{
        backgroundColor: 'orange',
        color: 'black',
        padding: 10,
        borderRadius: 7,
        width: 400 ,
        marginLeft: 15,
        textAlign: 'center',
        
    }
    
   

})