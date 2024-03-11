import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Screen0 from './Screensproject/Screen0';
import Screen1 from './Screensproject/Screen1';
import Screen2 from './Screensproject/Screen2';
import Screen3creat from './Screensproject/Screen3creat';
import Screen4login from './Screensproject/Screen4login';
import Screen5home from './Screensproject/Screen5home';
import Search from './Screensproject/Search';
import Listscreen from './Screensproject/Listscreen';
import Profile from './Screensproject/Profile';
import MovieDetails from './Screensproject/MovieDetails';
import Actionscreen from './Screensproject/Actionscreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import ThemeProvider from './Context/themeProvider';



const TabBar = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Screen5home"
        component={Screen5home}
        options={{
          tabBarIcon: () => (
            <AntDesign name="home" size={20} color='color' />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <AntDesign name="search1" size={20} color='color' />
          ),
        }}
      />
      <Tab.Screen
        name="Listscreen"
        component={Listscreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="list" size={20} color='color' />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DrawerNavigate}
        options={{
          tabBarIcon: () => (
            <AntDesign name="profile" size={20} color='color' />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigate() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen0" component={Screen0} options={{ headerShown: false }} />
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
          <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
          <Stack.Screen name="Screen4login" component={Screen4login} options={{ headerShown: false }} />
          <Stack.Screen name="Screen3creat" component={Screen3creat} options={{ headerShown: false }} />
          <Stack.Screen name="Screen5home" component={BottomNav} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
          <Stack.Screen name="Actionscreen" component={Actionscreen} />
          <Stack.Screen name="Profile" component={Profile}/>
          {/* <Stack.Screen name="Profile" component={DrawerNavigate} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
   
  );
}
