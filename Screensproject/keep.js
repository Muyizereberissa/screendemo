import React, { createContext, useState } from 'react';

export const ChangeIntoDarkModa =  createContext() 

export const ThemeProviderIntoDarkModa = ({ children }) => {
    const [dark,setDark] = useState(false)
    // const data = {
    //     name:'Ishimwe',
    //     email:'pass@gmail.com',
    // }
const changeIntoDark = ()=>{
    setDark((prev)=>!prev)
}

  return (
        <ChangeIntoDarkModa.Provider value={{dark,changeIntoDark}} >
            {children}
        </ChangeIntoDarkModa.Provider>
  )};

 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import InputText from './src/component/input/InputText';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/component/router/stackNavigation';
import Quiz from './src/component/quizapplication/quiz';
import { AuthContext, AuthProvider } from './context/authenticationContext';
import { ThemeProvider } from './context/darkmodal';
import { ThemeProviderIntoDarkModa } from './context/themeContext';


export default function App() {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <ThemeProviderIntoDarkModa>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </ThemeProviderIntoDarkModa>
  );
} import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, TouchableHighlight } from 'react-native';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import TextInputCom from './textInputCom';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { useContext } from 'react';
import { AuthContext } from '../../../context/authenticationContext';
import FlashMessage from 'react-native-flash-message';
import { useTheme } from '../../../context/darkmodal';
import { ChangeIntoDarkModa } from '../../../context/themeContext';


const InputLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {data,dark,changeIntoDark} =  useContext(ChangeIntoDarkModa)


  const ValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const ValidFormHandle = () => {
    let valid = true;

    // email validations
    if (email == '') {
      setEmailError('Email is required');
      valid = false;
    } else if (!ValidEmail(email)) {
      setEmailError('Invalid email ');
      valid = false;
    } else {
      setEmailError('');
    }

    // password validations

    if (password.trim() == '') {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const submitHandle = async () => {
    if (ValidFormHandle()) {
      
    }
  };

  return (
    <View style={[styles.container,{backgroundColor:dark?'black':'white'} ]}>
      {<FlashMessage position="top" />}
      <Button title='change into dark' onPress={()=>{changeIntoDark()}} />
      <View style={{ height: 100 }}></View>
      <Text style={{ fontSize: 20, color:dark?'black':'white'}}>Sign in </Text>
      <TextInputCom label={'email'} mode={'outlined'} value={email} onChangeText={setEmail} error={emailError} />
      {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
      <TextInput
        mode="outlined"
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        error={passwordError}
        activeOutlineColor="blue"
      />
      {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
      <View style={{ height: 10 }}></View>
      { <ActivityIndicator />}
      <Button title="Submit" onPress={submitHandle} />
      <TouchableHighlight style={{ paddingTop: 20 }} onPress={() => navigation.navigate('login')}>
        <Text style={{ color: 'blue' }}> don't have an account</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    marginTop: 20,
    padding: 10,
  },
});

export default InputLogin;