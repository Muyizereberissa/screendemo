import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Octicons from 'react-native-vector-icons/Octicons';
import { Text, View,Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import {NavigationContainer} from '@react-navigation/native';


export default Home=() => {
    return (
        <NavigationContainer>
        
            <View style={{backgroundColor: '#EFECF7',width: '100%',height: 'auto',paddingHorizontal: '5%', marginTop: '30%'}}>
                <View>
                    <Text>Home</Text>
                    <View style={Styles.vi}>
                        <View>
                            <Image source={require('../assets/arrow.jpeg')}></Image>
                            <Text>Price Alert</Text>
                        </View>
                        <View>
                            <Image source={require('../assets/window.jpeg')}></Image>
                            <Text>Convert</Text>
                        </View>
                        <View>
                            <Image source={require('../assets/start.jpeg')}></Image>
                            <Text>Compare</Text>
                        </View>
                        <View>
                            <Image source={require('../assets/bpink.jpeg')}></Image>
                            <Text>Watchlist</Text>
                        </View>
                    </View>
                    <View>
                        <Text> </Text>
                        <View>
                            <Image source={require('../assets/house.jpeg')}></Image>
                            <View>
                                <Text></Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </NavigationContainer>
    )
}

