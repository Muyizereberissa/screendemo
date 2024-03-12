import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, EvilIcons } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIREBASE_AUTH } from '../firebaseConfiguration';
import { signInWithEmailAndPassword } from 'firebase/auth';
import FlashMessage,{  showMessage } from "react-native-flash-message";


const authentication = FIREBASE_AUTH;

const Screen4login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const ValidationForm = () => {
        let isValid = true;

        if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (password.trim() === '') {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = async () => {
        if (ValidationForm()) {
            try {
                const response = await signInWithEmailAndPassword(authentication, email, password);
                console.log(response);
            } catch (error) {
                console.log(error);
                showMessage({
                    message: "Sign In Failed",
                    description: error.message,
                    type: "danger",
                    duration: 3000
                });
            }

           
            const storeData = async () => {
                try {
                    const data = {
                        email: email,
                        password: password
                    };
                    const jsonData = JSON.stringify(data);
                    await AsyncStorage.setItem('user_data', jsonData);
                    console.log('Data stored successfully!');
                } catch (error) {
                    console.log(error);
                }
            };

            storeData();
        }
    };

    return (
        <>
            <FlashMessage position="top" />

            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar color="white" />

                <View style={{ height: 90 }}></View>

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={{ color: '#353633', fontSize: 30, fontWeight: 'bold', backgroundColor: 'orange', paddingLeft: 10, borderRadius: 10, textAlign: 'center' }}>M</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Muvi</Text>
                </View>
                <View style={{ height: 30 }}></View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center', marginTop: 15 }}> Please Log in to enjoy more benefits and we won't let you go</Text>
                </View>
                <View style={{ height: 30 }}></View>

                <View>
                    <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: '#5F6064', marginTop: 3, padding: 5, gap: 5 }}>
                        <FontAwesome name="envelope-o" size={13} color="orange" style={{ alignSelf: 'center' }} />
                        <TextInput
                            placeholder='e.g johndoe@gmail.com'
                            onChangeText={setEmail}
                            textColor='white'
                            value={email}
                        />
                        {emailError ? (<Text style={{ color: 'red', marginHorizontal: 20 }}>{emailError}</Text>) : null}
                    </View>

                    <View style={{ height: 15 }}></View>
                    <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: '#5F6064', marginTop: 2, padding: 5, gap: 2 }}>
                        <EvilIcons name="lock" size={22} color="orange" style={{ alignSelf: 'end' }} />
                        <TextInput
                            secureTextEntry={!showPassword} 
                            placeholder='Password'
                            onChangeText={setPassword}
                            textColor="white"
                            placeholderTextColor={'white'}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={22} color="orange" style={{ alignSelf: 'end' }} />
                        </TouchableOpacity>
                        {passwordError ? (<Text style={{ color: 'red', marginHorizontal: 20 }}>{passwordError}</Text>) : null}
                    </View>

                    <Text style={{ marginTop: 10, color: 'white', alignSelf: 'flex-end', marginRight: 28 }}>Forgot Password?</Text>
                    <View style={{ height: 15 }}></View>
                    <View></View>
                    <View>
                        <TouchableOpacity onPress={handleSubmit}>
                            <Text style={styles.press}> Get started</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 10 }}></View>
                    <Text style={{ marginTop: 10, color: 'white', alignSelf: 'center' }}> or simply log in with</Text>
                    <View style={{ height: 15 }}></View>

                    <View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', gap: 10, backgroundColor: 'black', padding: 10, borderRadius: 7, width: 400, marginLeft: 15 }}>
                                <FontAwesome name="apple" size={19} color="white" style={{ marginLeft: 90 }} />
                                <Text style={{ color: 'white', fontSize: 15, marginLeft: 30 }}>Log in with Apple</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: 10 }}></View>
                        <View>
                            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', padding: 7, borderRadius: 8, width: 400, marginLeft: 15 }}>
                                <FontAwesome name="google" size={20} color="red" style={{ marginLeft: 90 }} />
                                <Text style={{ color: 'black', fontSize: 16, marginLeft: 10 }}>Log in with Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 40 }}></View>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center', marginTop: 15 }}> Don't have an account</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Screen5home')}>
                                <Text style={{ color: 'orange', fontSize: 15, alignSelf: 'center', marginTop: 15 }}> Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#26282C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    press: {
        backgroundColor: 'orange',
        color: 'black',
        padding: 10,
        borderRadius: 7,
        width: 400,
        marginLeft: 15,
        textAlign: 'center',
    },
});

export default Screen4login;
