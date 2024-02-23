import {View} from 'react-native';
import React from 'react';
import Register from './screen/Register';
import Sign from './screen/Sign';
import  Shipping  from './screen/Shipping';
// import Signin from './screen/signIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import Screen1 from './Screensproject/Screen1';
import Screen2 from './Screensproject/Screen2';
import Screen0 from './Screensproject/Screen0';
import Homescreen from './Screensproject/Homescreen';
import Screen4login from './Screensproject/Screen4login';
import Screen3creat from './Screensproject/Screen3creat';
import Screen5home from './Screensproject/Screen5home';



const Stack = createNativeStackNavigator();




const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = 'Screen0' component={Screen0} options={{headerShown: false}}/>
        <Stack.Screen name = 'Screen1' component={Screen1} options={{headerShown: false}}/>
        <Stack.Screen name = 'Screen2' component={Screen2} options={{headerShown: false}}/>
        <Stack.Screen name = 'Screen4login' component={Screen4login} options={{headerShown: false}}/>
        <Stack.Screen name = 'Screen3creat' component={Screen3creat} options={{headerShown: false}}/>
        <Stack.Screen name = 'Screen5home' component={Screen5home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Screen5home/>
    //   {/* <Screen4login/> */}
    // </View>
   
   
    
      
  )
};

export default App;


