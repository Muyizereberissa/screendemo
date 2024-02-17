import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Octicons from 'react-native-vector-icons/Octicons';
import { Text, View,Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";
import { AntDesign } from "react-native-vector-icons";

const Sign = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Validate email and password
        if (!email.includes('@') || password.length < 6) {
            Alert.alert('Invalid Credentials', 'Please enter a valid email and password.');
            return;
        }

        // Your login logic here
        // This is a placeholder for your actual login functionality
        // You might want to call an API to verify credentials

        // Clear fields after successful login
        setEmail('');
        setPassword('');
    };

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <Image source={require('../assets/squarepants.jpeg')} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 8 }}>Login</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              
                <TextInput
                    label="Email"
                    mode="offlined"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    left={<TextInput.Icon icon={'account-outline'} color='#F6A035' style={{backgroundColor: '#FDE8EA', marginLeft: '30%',}} />}
                    style={{ marginTop: 5, width: 300, alignSelf: 'center',backgroundColor: '#EEF5FF', }}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                    left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"} style={{ backgroundColor: '#BFCFE7' }} />} 
                    style={{ marginTop: 5, width: 300, alignSelf: 'center',backgroundColor: '#EEF5FF', }}
                />
            </View>
            <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Feature under development.')}>
                    <Text style={{ color: '#40A2E3', padding: 10, fontWeight: '500', width: 200, fontSize: 18 }}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() =>
        navigation.navigate('register')
      }>
                    <Text style={{ backgroundColor: '#010101', color: 'white', borderRadius: 20, padding: 10, width: 100, textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 300, marginTop: 40 }}>
                <Icon name="facebook" size={30} color="blue" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginLeft: 20 }} />
                <AntDesign name='google' size={24} color="red" style={{ marginTop: 3, borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF' }} />
                <Icon name="apple" size={30} color="black" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginRight: 30 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fdec4d2',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Sign;