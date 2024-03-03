import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen5home from "./Screen5home";
import Search from "./Search";
import AntDesign from 'react-native/AntDesign'
import HomeOne from "./HomeOne";

const Tab = createBottomTabNavigator();
export default function AllprojectScreens(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeOne" component={HomeOne} options={{
          tabBarIcon:()=>{
            <AntDesign name="home" size={20} color={color}/>
          }
        }}/>
        <Tab.Screen name="Search" component={Serarch} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}