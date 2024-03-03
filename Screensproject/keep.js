import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeOne from "./Screensproject/HomeOne";
import Search from "./Screensproject/Search";
import Screen5home from "./Screensproject/Screen5home"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Listscreen from "./Screensproject/Listscreen";
import Profile from "./Screensproject/Profile";
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        
      }}>
        <Tab.Screen 
        name="Home" 
        component={Screen5home} options={{
          tabBarIcon:()=>
            <AntDesign name="home" size={20} color='red'/>
        }}/>
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon:()=>
            <AntDesign name="search1" size={20} color='red'/>
        }}/>
        <Tab.Screen name="Listscreen" component={Listscreen} options={{
          tabBarIcon:()=>
            <Entypo name="list" size={20} color='color'/>
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon:() => 
          <AntDesign name="profile" size={20} color='color'/>

        }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}