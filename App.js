import { View } from 'react-native';
import React from 'react';
import Register from './screen/Register';
import Sign from './screen/Sign';
import Shipping from './screen/Shipping';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screensproject/Screen1';
import Screen2 from './Screensproject/Screen2';
import Screen0 from './Screensproject/Screen0';
import Homescreen from './Screensproject/Homescreen';
import Screen4login from './Screensproject/Screen4login';
import Screen3creat from './Screensproject/Screen3creat';
import Screen5home from './Screensproject/Screen5home';
import Search from './Screensproject/Search';
import Listscreen from './Screensproject/Listscreen';
import Profile from './Screensproject/Profile';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


 const Tab = createBottomTabNavigator();
 const Stack = createNativeStackNavigator()
 function BottomNav() {
   return (
     <Tab.Navigator screenOptions={{}}>
       <Tab.Screen 
         name="screen5homepage" 
         component={Screen5home} 
         options={{
           tabBarIcon:()=>
             <AntDesign name="home" size={20} color='red'/>
         }}
       />
       <Tab.Screen 
         name="Search" 
         component={Search} 
         options={{
           tabBarIcon:()=>
             <AntDesign name="search1" size={20} color='red'/>
         }}
       />
       <Tab.Screen 
         name="Listscreen" 
         component={Listscreen} 
         options={{
           tabBarIcon:()=>
             <Entypo name="list" size={20} color='color'/>
         }} 
       />
       <Tab.Screen 
         name="Profile" 
         component={Profile} 
         options={{
           tabBarIcon:() => 
           <AntDesign name="profile" size={20} color='color'/>
         }}
       />
      
     </Tab.Navigator>
   )};
 
export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Screen0" component={Screen0} options={{headerShown: false}}/>
         <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false}}/>
         <Stack.Screen name="Screen2" component={Screen2} options={{headerShown: false}}/>
         <Stack.Screen name="Screen4login" component={Screen4login} options={{headerShown: false}}/>
         <Stack.Screen name="Screen3creat" component={Screen3creat} options={{headerShown: false}}/>
         <Stack.Screen name="Screen5home" component={BottomNav} options={{headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>

  );
}
