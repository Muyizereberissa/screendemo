import {View} from 'react-native';
import React from 'react';
import Register from './screen/Register';
import Sign from './screen/Sign';
// import  Shipping  from './screen/Shipping';
// import Signin from './screen/signIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './screen/Home';
import Images from './screen/images';

const Stack = createNativeStackNavigator();




const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Sign' component={Sign}/>
        <Stack.Screen name = 'register' component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
      // <View>
      //   {/* <Home></Home> */}
      //   <Images></Images>
      // </View>
 
  );
};

export default App;
