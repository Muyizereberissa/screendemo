import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native'
import React from 'react'
// import Icon from "react-native-element";
import { TextInput } from "react-native-paper";
import {Ionicons} from 'react-native-vector-icons';
import Inputcomp from '../components/Inputcomp'
import Trendcomp from '../components/Trendcomp'
import Imagecomp from '../components/Imagecomp';
// import ScreenImages from '../components/screenImages'


const Screen5home = () => {
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{flexDirection: 'row', marginTop: 60, alignSelf: 'start', }}>
                
                <Image source={require('../assets/logo.png')}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 70, marginLeft: 180, }}>
                <Ionicons name="bookmark-outline" size={24} color="white" />
                <Ionicons name="notifications-outline" size={24} color="white" />
            </View>
        </View>
        <View>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row', gap:40}}>
              <View>
                <Text style={{color:'#f1b91c'}}>Featured</Text>
                <View style={{width:20, height:2, backgroundColor: '#f1b91c'}}></View>
              </View >
              <View style={{ flexDirection: 'row', gap:40}}>

                <Text style={{color:'white',}}>Series</Text>
                <Text style={{color:'white',}}>Films</Text>
                <Text style={{color:'white',}}>origin</Text>
              </View>
            </View>

          </ScrollView>
        </View>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false} >
          < View style={{ flexDirection: 'row', marginTop: 20, gap: 20, fontSize: 20 }}>
            <Trendcomp trend="Popular Today" />
            <Trendcomp trend="Marvel" />
            <Trendcomp trend="Fans Choice" />
            <Trendcomp trend="Star Wars" />
            <Trendcomp trend="Star Wars" />
            <Trendcomp trend="Star Wars" />
          </View>
        </ScrollView>
       <View >
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 25}}> New Release</Text>
          <Text style={{color:'#5f6064'}}>View more</Text>
        </View>
       </View>
       <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View style={{flexDirection: 'row', marginTop: 20, gap: 20,}}>
            <Inputcomp  image={require('../assets/mula.jpeg')} text="0.8"  />
            <Inputcomp  image={require('../assets/wayback.jpeg')} text="0.8"  />
            <Inputcomp  image={require('../assets/mulan.jpeg')} text="0.8"  />
          </View>
        </ScrollView>

       </View>
       <View >
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 25}}> Made for you</Text>
          <Text style={{color:'#5f6064'}}>View more</Text>
        </View>
       </View>
       <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', marginTop: 20, gap: 20,}}>
            <Inputcomp  image={require('../assets/moana.jpeg')} text="10"  />
            <Inputcomp  image={require('../assets/boots2.jpeg')} text="10"  />
            <Inputcomp  image={require('../assets/wakanda.jpeg')} text="10"  />
            <Inputcomp  image={require('../assets/mulan.jpeg')} text="10"  />
          </View>
        </ScrollView>

       </View>
       <Text style={{color: 'white', marginTop: 20, fontSize: 25}}>Popular on Muvi</Text>
       <View style={{height:10}}></View>
       <View>
        <Imagecomp image={require('../assets/legacy.jpeg')} text="0.8" />
        <Imagecomp image={require('../assets/goodandevil.jpeg')} text="0.8" />
        <Imagecomp image={require('../assets/womanking.jpeg')} text="0.8" />
       </View>
       </ScrollView>

    </View>
  )
}

export default Screen5home

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
  }
})