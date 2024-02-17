import { StatusBar } from "expo-status-bar";
import { TextInput, Icon, IconButton } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"
import Entypo from "react-native-vector-icons/Entypo"

import React from "react";

const Images = ({navigation}) => {
    return (
        <View style={{backgroundColor: '#EFECF7',width: '100%',height: 'auto',paddingTop: 33,}}>
            <ScrollView>
            <StatusBar style="auto" />
            <View style={{backgroundColor: '#EFECF7',width: '100%',height: 'auto',paddingHorizontal: '5%', marginTop: '10%'}}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{fontSize: 25,color: 'black',fontWeight: 'bold',}}>Home</Text>
                    </View>

                    <View style={{backgroundColor: '#EFECF7',width: '100%',height: 100,marginTop: 20,display: 'flex',flexDirection: 'row',gap: 10,justifyContent: 'space-between',alignItems: 'center',flexWrap: 'wrap',}}>
                        <View style={{backgroundColor: 'white',width: '20%',height: '65%',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',borderRadius: 100,}}>
                            <TouchableOpacity style={{borderWidth: 2,borderRadius: 100,borderColor: '#DDDBF4',width: '35%',height: '35%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}>
                                <MaterialIcons name="bolt" style={{fontSize: 30,color: '#7E8CE8',marginTop: -12, marginLeft: '-10%',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor: 'white',width: '20%',height: '65%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',borderRadius: 100,}}>
                            <TouchableOpacity style={{borderWidth: 2,borderRadius: 100,borderColor: '#F6EBDF',width: '50%',height: '50%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}>
                                <AntDesign name="swap" style={{fontSize: 25,color: '#F2C58B',}} />
                            </TouchableOpacity>

                        </View>
                        <View style={{backgroundColor: 'white',width: '20%',height: '65%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',borderRadius: 100,}}>
                            <TouchableOpacity style={{width: '50%',height: '50%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}} >
                            <Entypo name="popup" style={{fontSize: 25,color: '#80b3ff',}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor: 'white',width: '20%',height: '65%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',borderRadius: 100,}}>
                            <TouchableOpacity style={{borderWidth: 2,borderRadius: 100,borderColor: '#D1E7DD',width: '50%',height: '50%',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}>
                                <MaterialIcons name="star-border-purple500" style={{fontSize: 30,color: '#6EC386',marginTop: -3,}} />
                            </TouchableOpacity>
                        </View>

                        <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',gap: 33,}}>
                            <Text style={{marginLeft:10}}>Price Alert</Text>
                            <Text>Convert</Text>
                            <Text style={{marginLeft:10}}>Compare</Text>
                            <Text style={{marginLeft:10}}>Watchlist</Text>
                        </View>
                    </View>
           </View>
           <View style={{paddingLeft: '5%',backgroundColor: '#F8F7FB',borderTopLeftRadius: 30,borderTopRightRadius: 30,marginTop: 50,paddingTop: 30,width: '100%',height: 260,display: 'flex',flexDirection: 'column',}}>
                    <Text style={{fontSize: 25,}}>Your Wallet</Text>

                    <ScrollView contentContainerStyle={{backgroundColor: 'F8F7FB',alignItems: 'center',gap: 20,height: 170,}} showsHorizontalScrollIndicator={false} horizontal>

                        <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingVertical: 20,paddingHorizontal: '2%',backgroundColor: 'white',width: 290,height: 'auto',borderRadius: 30,}}>
                            <View style={{backgroundColor: 'white',width: '49%',height: '55%',gap: 3,}}>
                                <Text style={{color: '#B7B6BE',fontSize: 15,}}>Neo</Text>
                                <Text style={{fontSize: 16,}}>NEO 0.2124</Text>
                                <Text style={{marginTop: 6,fontSize: 22,}}>$32,128.80</Text>
                            </View>
                            <View>
                              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
                             <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
                            </View>
                        </View>

                        <View style={{ display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingVertical: 20,paddingHorizontal: '2%',backgroundColor: 'white',width: 290,height: 'auto',borderRadius: 30,}}>
                            <View style={{backgroundColor: 'white',width: '49%',height: '55%',gap: 3,}}>
                                <Text style={{color: '#B7B6BE',fontSize: 15,}}>Vechain</Text>
                                <Text style={{fontSize: 16,}}>VEC 0.2124</Text>
                                <Text style={{marginTop: 6,fontSize: 22,}}>$32,128.80</Text>
                            </View>
                            <View>
                              <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
                              <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
                            </View>
                        </View>

                        <View style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingVertical: 20,paddingHorizontal: '2%',backgroundColor: 'white',width: 290,height: 'auto',borderRadius: 30,}}>
                            <View style={{backgroundColor: 'white',width: '49%',height: '55%',gap: 3,}}>
                                <Text style={{color: '#B7B6BE',fontSize: 15,}}>Neo</Text>
                                <Text style={{fontSize: 16,}}>NEO 0.2124</Text>
                                <Text style={{marginTop: 6,fontSize: 22,}}>$32,128.80</Text>
                            </View>
                          <View>
                             <View style={{backgroundColor:'#C1E1D4', width:50, paddingHorizontal:8,paddingVertical:13, borderRadius:30}}><Icon name='house' iconStyle={{color:'#6FC584'}}/></View>
                             <View style={{display:'flex', flexDirection:'row', gap:3}}><Icon name='angle-down' type='font-awesome' iconStyle={{paddingTop:15, color:'#F16279'}}/><Text style={{marginTop:18, color:'gray', fontWeight:'bold'}}>2.5%</Text></View>
                          </View>
                        </View>

                    </ScrollView>
                </View>
                <View style={{backgroundColor: '#F6F6FA',paddingHorizontal: '5%',width: '100%',height: 180,}}>
                    <Text style={{fontSize: 25,}}>Trending</Text>

                    <View style={{display: 'flex',flexDirection: 'column',gap: -20, }}>
                        <View style={{backgroundColor: 'F6F6FA',width: '100%',height: '36%',marginTop: 20,display: 'flex',flexDirection: 'row',justifyContent: 'space-between',paddingRight: '5%',marginTop: 25,alignItems: 'center',}}>
                            <IconButton icon={'currency-btc'} size={35} iconColor="#F7961A" style={{backgroundColor: '#FFE1C5',marginLeft: '-0.2%',}} />
                            <View style={{width: '80%',height: '100%',backgroundColor: 'F6F6FA',display: 'flex',flexDirection: 'row',justifyContent: 'space-between',flexWrap: 'wrap',gap: 40,}}>
                                <Text style={{fontSize: 20,}}>Bitcoin</Text>
                                <Text style={{fontSize: 22,}}>$32,128.80</Text>
                                <Text style={{marginTop: -35,color: '#ADACB3',}}>BTC</Text>
                                <TouchableOpacity style={{backgroundColor: 'F6F6FA',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',width: '35%',gap: -10,height: '29%',marginTop: -35,}}>
                                    <IconButton icon={'chevron-up'} iconColor="#7CC39D" />
                                    <Text style={{marginRight: '20%',color: '#ADACB3',}}>2.5%</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{backgroundColor: 'F6F6FA',width: '100%',height: '36%',marginTop: 20,display: 'flex',flexDirection: 'row',justifyContent: 'space-between',paddingRight: '5%',marginTop: 25,alignItems: 'center',}}>
                            <IconButton icon={'currency-btc'} size={35} iconColor="#D04E80" style={{backgroundColor: '#FFE2ED',marginLeft: '-0.2%',}} />
                            <View style={{width: '80%',height: '100%',backgroundColor: 'F6F6FA',display: 'flex',flexDirection: 'row',justifyContent: 'space-between',flexWrap: 'wrap',gap: 40,}}>
                                <Text style={{fontSize: 20,}}>Bytecoin</Text>
                                <Text style={{fontSize: 22,}}>$15,128.80</Text>
                                <Text style={{marginTop: -35,color: '#ADACB3',}}>BCN</Text>
                                <TouchableOpacity style={{backgroundColor: 'F6F6FA',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',width: '35%',gap: -10,height: '29%',marginTop: -35,}}>
                                    <IconButton icon={'chevron-up'} iconColor="#7CC39D"/>
                                    <Text style={{marginRight: '20%',color: '#ADACB3',}}>2.2%</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: 'white',marginTop: 30,height: 80,borderTopLeftRadius: 30,borderTopRightRadius: 30,width: '100%',display:'flex',flexDirection: 'row',justifyContent:'space-between',alignItems:'center', }}>
                    <IconButton icon={'home-outline'} size={30}/>
                    <IconButton icon={'chart-bar'} size={30} iconColor="#E1E1E5"/>
                    <IconButton icon={'wallet-outline'} size={30} iconColor="#E1E1E5" />
                    <IconButton icon={'script-outline'} size={30} iconColor="#E1E1E5" />
                    <IconButton icon={'account-arrow-left-outline'} size={30} iconColor="#E1E1E5"/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Images